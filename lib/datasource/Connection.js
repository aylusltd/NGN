var events      = require('events'),
    Base        = require('../NGN.Base');

/**
 * @class NGN.datasource.Connection
 * Represents a connection to a database instance.
 * @extends NGN.Base
 * @requires NGN
 * @docauthor Corey Butler
 */
var Class = Base.extend({
    
    /**
     * @constructor
     * Initialize a data source connection.
     */
    constructor: function( config ){

        // Self reference
        var me = this;
        
        // Default configuration
        config = config || {};
        
        // Inherit parent object
        Class.super.constructor.call( this, config );
        
        // Define properties of the class
        Object.defineProperties(this,{
            
            /**
             * @property {String}
             * @readonly
             * @protected
             * Identifies what type of database connection the object is referencing.
             */
            type: {
                value:          'Unknown',
                enumerable:     true,
                writable:       true
            },
            
            /**
             * @cfg {String} [host=127.0.0.1]
             * The host server.
             */
            host: {
                value:          config.host   || '127.0.0.1',
                enumerable:     true,
                writable:		true
            },
            
            /**
             * @cfg {Number} [port]
             * The host port.
             */
            port: {
                value:          config.port     || null,
                enumerable:     true,
                writable:		true
            },
            
            /**
             * @cfg {String} password
             * An optional password passed to the database instance.
             */
            password: {
                value:          config.password || null,
                enumerable:     false,
                writable:		true
            },
            
            /**
             * @cfg {String} username
             * An optional username passed to the database instance.
             */
            username: {
                value:          config.username || null,
                enumerable:     true,
                writable:		true
            },
            
            /**
             * @property {Boolean} [securedConnection=false]
             * Indicates the connection has been authorized using #password. 
             */
            securedConnection: {
                value:          false,
                enumerable:     true,
                writable:       true
            },
            
            /**
             * @property {Boolean} [isAuthorized=false]
             * Indicates the connection has been authorized using a login/account. 
             */
            isAuthorized: {
            	value:			false,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @cfg {String} [database=null]
             * The name of the database/store to connect to
             */
            database: {
            	value:			config.database || null,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @property {Boolean}
             * Indicates the connection is being established.
             */
            connecting: {
            	value:			false,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @property {Boolean}
             * Set to true when the connection is timed out.
             */
            timedout: {
            	value:			false,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @cfg {Number} [timeout=3]
             * The number of seconds to wait before the connection times out.
             */
            timeout: {
            	value:			config.timeout*1000 || 3000,
            	enumberable:	true,
            	writable:		true
            },
            
            /**
             * @property {Boolean} [connected=false]
             * This property is set to `true` once the connection is established. 
             */
            connected: {
                value:          false,
                enumerable:     true,
                writable:       true
            },
            
            /**
             * @property {Object}
             * The raw connection
             */
            connection: {
            	value:			null,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @cfg {Boolean} [autoConnect=true]
             * Automatically connect to the database when this object is initialized.
             */
            autoConnect: {
            	value:			config.autoConnect !== undefined ? config.autoConnect : true,
            	enumerable:		true,
            	writable:		true
            },
            
            /**
             * @property
             * @readonly
             * The client used to communicate with with the data source.
             */
            client: {
                enumerable:     true,
                writable:       true,
                value:          {connected:false,placeholder:true}
            },
            
            /**
             * @cfg {String} [dsnName]
             * Optionally specify a datasource name. This will be automatically registered
             * using NGN#createDatasource.
             */
            _name:	{
            	value:			config.name || null,
            	enumerable:		false,
            	writable:		true
            },
            
            /**
             * @property {String} [dsnName]
             * The name of the NGN#DSN that will be registered for this connection.
             */
            dsnName:	{
            	enumerable:		true,
            	get:			function() {
				            		return this._name;	
				            	},
				set:			function(newName) {
									if (__NGN.DSN[this._name] !== undefined)
										__NGN.destroyDatasource(this._name);
									this._name = newName.trim();
									__NGN.createDatasource(this._name,this);
								}
            }
        });
        
        this.registerAsDatasource();
        
    },
    
    /**
     * @method
     * Terminate the connection.
     */
    disconnect: function() {
    	this.onDisconnect();
    },
    
    /**
     * @method
     * Register this connection as a NGN#DSN.
     * @private
     */
    registerAsDatasource: function(){
    	if (this._name !== null)
    		__NGN.createDatasource(this._name,this);
    },
    
    /**
     * @method
     * Establish a connection.
     */
    connect: function(){
    	this.onConnect();
    },
    
    /**
     * @method
     * Return the data client for sending commands to the datasource.
     */
    getClient: function(){
    	return this.client;
    },
    
    /**
     * @event disconnect
     * Fired when the connection is terminated. This event is bubbled to #NGN.
     * @returns {NGN.datasource.Connection}
     */
    onDisconnect: function(){
    	if (__NGN.DSN[this._name] !== undefined)
    		__NGN.removeDatasource(this._name);
    	this.connected = false;
    	this.connecting = false;
    	this.emit('disconnect',this);
    	this.fireEvent('disconnect',this._name);
    },
    
    /**
     * @event connect
     * Fired when a database link/connection is attempted.
     * @returns {NGN.datasource.Connection}
     */
    onConnect: function(){
    	if (!this.connected) {   	
	    	this.connected = false;
    		this.connecting = true;
    		this.emit('connect', this);
    	}
    },
        
    /**
     * @event connected 
     * Fired when a datbase connection is established.
     * @returns {NGN.datasource.Connection}
     */
    onConnected: function() {
    	if (!this.connected) {
	        this.connected = true;
    	    this.connecting = false;
        	this.emit('connected', this);
       }
    },
    
    /**
     * @event disconnect
     * Fired when the database connection is dropped.
     * @returns {NGN.datasource.Connection}
     */
    onDisconnect: function(){
    	if (!this.connected) {
	    	this.connected = false;
    		this.connecting = false;
    		this.emit('disconnect', this);
		}
    },
    
    /**
     * @event timeout
     * Fired when the connection times out.
     * @returns {NGN.datasource.Connection}
     */
    onTimeout: function(){
    	this.timedout = true;
    	this.emit('timeout', this);
    },
    
    /**
     * @event authorize
     * Fired when an authorization attempt is made.
     * @returns {NGN.datasource.Connection}
     */
    onAuthorization: function(){
    	this.emit('authorize',this);
    },
    
    /**
     * @event authorized
     * Fired when the authorization attempt is completed.
     * Automatically sets the #isAuthorized property to true or false.
     */
    onAuthorized: function(success){
    	success = success || false;
    	this.emit('authorized',success);
    	this.isAuthorized = success;
    	this.securedConnection = success;
    }
    
});

// Create a module out of this.
module.exports = Class;