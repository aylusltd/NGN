// Array prototype additions
Array.prototype.remove = function(from, to) {
	if(from.isString()){
  		while(this.indexOf(from) !== -1){
  			this.slice(this.indexOf(from),1);
  		}
  		return this;
  	} else {
  		var rest = this.slice((to || from) + 1 || this.length);
  		this.length = from < 0 ? this.length + from : from;
  		return this.push.apply(this, rest);
	}
};





var fs = require('fs');

// Loop through the library and require each of the modules
var namespace = {};
require('wrench').readdirSyncRecursive(__dirname).forEach(function( file ){
    if (__dirname+'/'+file !== __filename 
    	&& file !== 'NGN.core.js' 
    	&& file !== 'NGN.js'
    	&& file !== 'BaseClass.js' 
    	&& file.indexOf('.js') >= 0) {
        var path    = file.replace(/\\/gi,'/').replace(/\/\//gi,'/').replace(/\.js/gi,'').split('/'),
            pkg     = namespace;
        
        for (var position=0; position<path.length; position++) {
            
            if (pkg[path[position]] == undefined)
                pkg[path[position]] = position == path.length-1 ? require(__dirname+'/'+file) : {};
            
            if (position !== path.length-1)
                pkg = pkg[path[position]];
        }   
    }
});


/**
 * @class NGN
 * @singleton 
 * For information about using the NGN namespace, please see the [NGN Namespace Guide](#!/guide/ngn_namespace).
 * @aside guide ngn_namespace
 * @aside guide global_features
 * @aside guide application_scope
 */
var NGN = require('./BaseClass').extend({

    constructor: function( config ) {
        
        NGN.super.constructor.call(this);
        
        var emitter = require('events').EventEmitter;
        
        Object.defineProperties(this,{
        	
        	version: {
            	value:		'0.0.1',
            	enumerable:	true,
            	writable:	false,
            	configurable:false
            },
        	
        	/**
             * @property {Object} [DSN=Object]
             * Store **data service names** associated with the application.
             * Each DSN key represents a database connection.
             * 
             * 		var userDB = NGN.getDatasource('users');
             * 
             * *OR*
             * 
             * 		var userDB = NGN.DSN['users'];
             * @protected
             */
            DSN: {
                value:      {},
                enumerable: true,
                writable:   true
            },
            
            /**
            * @property {EventEmitter}
            * This is an [EventEmitter](http://nodejs.org/docs/latest/api/events.html) made available as a common 
            * hook for bridging events bubbled up through the NGN API.
            * @uses events
            * @protected
            */
            BUS: {
                value:      new emitter(),
                enumerable: true,
                writable:   true
            },
            
            /**
             * @property {Object} [SERVER=Object]
             * Stores servers used in the application.
             * @protected
             */
            SERVER: {
                value:      {},
                enumerable: true,
                writable:   true
            },
            
            /**
             * @property {Object} [CFG=Object]
             * Default configuration parameters. This is a key/value store containing
             * frequently or repetitively used values. 
             * @protected
             */
            CFG: {
                value:      {},
                enumerable: true,
                writable:   true
            },
            
            /**
             * @method
             * This convenience method will get or set configuration values.
             * @param {String} name
             * The name of the configuration item to return.
             * @param {Any} value
             * The value to assign to the configuration item.
             */
            config: {
            	enumerable:	true,
            	get:		function(name){
			            		return this.CFG[name];
			            	},
			            	
			    set:		function(name,value){
			    				value = value || null;
						    	if (value == null)
						    		return;
						    	this.CFG[name] = value;
						    }
            },
            
            /**
             * @property {String}
             * The platform-specific path separator. `\\` or `/`.
             * @readonly
             * @static
             */
            fileSeparator: {
            	enumerable:	true,
            	get:		function() { return require('path').sep; }
            },
            
            /**
             * @property {Object}
             * A convenience reference to node's [dns](http://nodejs.org/api/dns.html) object.
             * 
             * This object contains several methods for DNS requests.
             * 
             * * **NGN.DNS.lookup(domain, [family], callback)**
			 * * **NGN.DNS.resolve(domain, [rrtype], callback)**
			 * * **NGN.DNS.resolve4(domain, callback)**
			 * * **NGN.DNS.resolve6(domain, callback)**
			 * * **NGN.DNS.resolveMx(domain, callback)**
			 * * **NGN.DNS.resolveTxt(domain, callback)**
			 * * **NGN.DNS.resolveSrv(domain, callback)**
			 * * **NGN.DNS.resolveNs(domain, callback)**
			 * * **NGN.DNS.resolveCname(domain, callback)**
			 * * **NGN.DNS.reverse(ip, callback)**
             * 
             * @static
             * @readonly
             */
            DNS: {
            	enumerable:	true,
            	get:		function() { return require('dns'); }
            },
            
            /**
             * @property
             * A convenience reference to node's [os](http://nodejs.org/api/os.html) object.
             * 
             * This object contains several methods to reveal OS-level information:
             * 
             * * **NGN.OS.tmpDir()**
			 * * **NGN.OS.hostname()**
			 * * **NGN.OS.type()**
			 * * **NGN.OS.platform()**
			 * * **NGN.OS.arch()**
			 * * **NGN.OS.release()**
			 * * **NGN.OS.uptime()**
			 * * **NGN.OS.loadavg()**
			 * * **NGN.OS.totalmem()**
			 * * **NGN.OS.freemem()**
			 * * **NGN.OS.cpus()**
			 * * **NGN.OS.networkInterfaces()**
			 * * **NGN.OS.EOL**
			 * * **NGN.OS.fileSeparator**
			 * @readonly
			 * @static
             */
            OS: {
            	eumerable:	true,
            	get: 		function() { return require('os')}
            },
            
            /**
		 	 * @property {Object}
		 	 * A convenience reference to node's [path](http://nodejs.org/api/path.html) object.
		 	 * 
		 	 * This object contains several methods for string manipulation of filepaths.
		 	 * 
		 	 * * **NGN.path.normalize('/foo/bar//baz/asdf/quux/..')** returns `'/foo/bar/baz/asdf'`
		 	 * * **NGN.path.join([path1], [path2], [...])** returns `'path1/path2'
			 * * **path.resolve([from ...], to)** resolves to an absolute path.
			 * * **path.relative(from, to)** resolves to a relative directory path. This is used when traversing from one directory to another.
			 * * **path.dirname(p)** if p = '/my/path', returns `/my/path`
			 * * **path.basename(p, [ext])** returns the filename portion of the path.
			 * * **path.extname(p)** returns the extension of the filename portion of the path.
			 * 
			 * @static
			 * @readonly
		 	 */
		 	path: {
		 		enumerable:	true,
		 		get:		function(){ return require('path'); },
		 	},
            
            /**
             * @property {Array}
             * Stores the extension names. Primarily used for #getExtensions
             * @private
             * @protected 
             */
            _xtn: {
            	value:		[],
            	enumerable:	false,
            	writable:	true
            },
            
            /**
             * @property {Function}
             * An empty function, which doesn't do anything.
             * @protected
             */
            emptyFn: {
            	value: 		function(){},
            	enumerable: false,
            	configurable: true
            },
            
            _cmd: {
            	value:		null,
            	enumerable:	false,
            	writable:	true
            },
            
            /**
             * @property {NGN.core.Command}
             * A reference to the command line interface.
             */
            command: {
            	enumerable:	true,
            	get:		function() {
			            		if (this._cmd == null)
			            			this._cmd = new __NGN.core.Command();
			            		return this._cmd;
			            	}
            }
            
        });
        
        this.OS.fileSeparator = this.fileSeparator;
        
        // Add each framework element to the NGN namespace  
        for (var ns in namespace) {
            Object.defineProperty(this,ns,{
                value:      namespace[ns],
                enumerable: true,
                writable:   true,
                configurable: false
            });
        }
        
        // Initialize common events
        var _events = [
        				'Error'
        			];
        
        // Add event listeners for override.
        for (var i=0;i<_events.length;i++)
        	this.addEventListener(_events[i].toLowerCase(),this['on'+_events[i]]);
    },
    
    /**
     * @method
     * A convenience method for using NGN.core.Command#exec.
     */
    exec: function() {
    	this.command.exec(arguments);
    },
    
    /**
     * @method
     * Add an application-wide event listener to the #BUS.
     * @param {String} eventName
     * The name of the event to listen for.
     * @param {Function} callback
     * The callback to execute when the event is fired.
     */
    addEventListener: function(eventName,callback) {
    	this.BUS.on(eventName,callback);
    },
    
    /**
     * @accessor
     * Get the custom extensions available to the application.
     * @returns {Array} 
     */
    getExtensions: function() {
    	return this._xtn;
    },
    
    
	/**
	 * @method
	 * A shortcut method for creating new classes.
	 * 		NGN.define('ORG.team.Member',{
	 * 			extend: 'NGN.app.Person',
	 * 			boss: 'CEO',
	 * 			division: 'Executive',
	 * 			paygrade: 2,
	 * 			
	 * 			getOfficialTitle: function(role){
	 * 				return role+', Office of the CEO'
	 * 			}
	 * 		});
	 * The example above would extend `NGN.app.Person` to create `ORG.team.Person`.
	 * If the `ORG.team` namespace does not exist, it will be created
	 * dynamically before creating the new class.
 	 * @param {String} target
 	 * The name of the new class.
 	 * @param {Object} config
 	 * The configuration/extended structure to apply to the object.
	 */
	define: function(target, config) {
		var ns = source.split('.');
		
		if (ns[0].trim().toUpperCase() == 'NGN' || ns[0].trim().toUpperCase() == '__NGN')
			throw Error('Cannot overwrite the NGN namespace.');
		
		if (global[ns[0].trim().toUpperCase()] == undefined) {
			global[ns[0].trim().toUpperCase()] =
			global[ns[0].trim().toLowerCase()] =
			global[ns[0].trim()] = {};
		}
		
		var pkg = global[ns[0].trim()];
		for (var i=1;i<ns.length-1;i++) {
			if (pkg[ns[i].trim()] = undefined)
				pkg[ns[i].trim()] = {};
			pkg = pkg[ns[i].trim()];
		}
		
		var target = config.extend || 'NGN.core';
		var _cls = target.split('.'),
			_use = __NGN;
		for(var i=1;i<target.length;i++){
			_use = _use[target[i]];
		}
		
		if (config.constructor == undefined) {
			config.constructor = function(){
				Class.super.constructor.call(this,config);
			}
		} else {
			config.constructor = function(cfg) {
				Class.super.constructor.call(this,cfg);
				config.constructor(cfg);
			}
		}
		
		if (config.extend !== undefined)
			delete config.extend;
		
		var Class = _use.extend(config);
		
		module.exports = Class;
	},
    
    /**
     * @method
     * Fire an event on the #BUS
     * @param {String} eventName (required)
     * The name of the event
     * @param {Mixed} [metadata]
     * Optional metadata sent with the event.  
     */
    fireEvent: function( eventName, metadata ){
        this.BUS.emit(eventName,metadata || null);
    },
    
     /**
     * @method
     * Create and register a #DSN.
     * @param {String} name
     * The name by which the #DSN is referenced.
     * @param {NGN.datasource.Connection} connection
     * A connection to a specific database or data store.
     */
    createDatasource: function( name, connection ){
        this.onBeforeCreateDSN(name, connection);
        this.DSN[name] = connection;
        this.onCreateDSN(name, connection);
        
    },
    
    /**
     * This event is fired just prior to the creation of a #DSN. 
     * @event beforecreatedatasource
     * @param {String} name
     * The reference name of the new datasource.
     * @param {NGN.datasource.Connection} connection
     * The connection about to be created. 
     */
    onBeforeCreateDSN: function( name, connection ) {
        this.fireEvent('beforecreatedatasource', name, connection || null);
    },
    
    /**
     * This event is fired just after the creation of a #DSN.
     * @event createdatasource
     * @param {String} name
     * The reference name of the new datasource.
     * @param {NGN.datasource.Connection} connection 
     * The connection object just created. 
     */
    onCreateDSN: function( connection ) {
        this.fireEvent('createdatasource',connection);
    },
    
    /**
     * @method
     * Returns the specified datasource connection.
     * @param {String} name
     * The reference name of the #DSN to return.
     * @returns NGN.datasource.Connection 
     */
    getDatasource: function( name ){
        return this.DSN[name];
    },
    
    /**
     * @method
     * Shortcut. Equivalent to #getDatasource.
     * @param {String} name
     * The reference name of the #DSN to return.
     * @returns NGN.datasource.Connection 
     */
    getDSN: function( name ){
        return this.getDatasource(name);
    },
    
    /**
     * @method
     * Removes a datasource connection. 
     * @param {String} name
     * The reference name of the #DSN to remove.
     */
    removeDatasource: function( name ){
        this.onBeforeremoveDatasurce(name, this.DSN[name]);
        delete this.DSN[name];
        this.onremoveDatasource(name);
    },
    
    /**
     * @method
     * Shortcut. Equivalent to #removeDatasource.
     * @param {String} name
     * The reference name of the #DSN to remove.
     */
    removeDSN: function( name ){
    	this.removeDatasource(name);
    },
    
    /**
     * This event is fired just prior to removeing a #DSN. 
     * @event beforeremovedatasource
     * @param {String} name
     * The reference name of the datasource.
     * @param {NGN.datasource.Connection} connection
     * The connection object about to be removeed. 
     */
    onBeforeremoveDatasource: function( name ) {
        this.fireEvent('beforeremovedatasource', name, connection);
    },
    
    /**
     * This event is fired just after the destruction of a #DSN.
     * @event removedatasource
     * @param {String} name
     * The reference name of the new datasource.
     */
    onremoveDatasource: function( name ) {
        this.fireEvent('removedatasource',name);
    },
    
     /**
     * @method
     * Create and register a #SSN.
     * @param {String} name
     * The name by which the #SSN is referenced.
     * @param {NGN.service.Connection} connection
     * A connection to a specific service or module.
     */
    createService: function( name, connection ){
        this.SSN[name] = connection;
    },
    
    /**
     * @method
     * Returns the specified service source connection.
     * @param {String} name
     * The reference name of the #SSN to return.
     * @returns NGN.service.Connection 
     */
    getService: function( name ){
        return this.SSN[name];
    },
    
    /**
     * @method
     * Returns the entire #SSN object. 
     */
    getServices: function() {
        return this.SSN;
    },
    
    /**
     * @method
     * Removes a service or module connection. 
     * @param {String} name
     * The reference name of the #SSN to return.
     */
    removeService: function( name ){
        delete this.SSN[name];
    },
    
     /**
     * @method
     * Create and register a configuration property (key/value).
     * @param {String} name
     * The name by which the #CFG property is referenced.
     * @param {Mixed} value
     * A #String or #Object.
     */
    createConfigurationProperty: function( name, value ){
        this.CFG[name] = value;
    },
    
    /**
     * @method
     * Returns the specified configuration property..
     * @param {String} name
     * The reference name of the #CFG to return.
     * @returns {Mixed} 
     */
    getConfigurationProperty: function( name ){
        return this.CFG[name];
    },
    
    /**
     * @method
     * Removes a configuration property. 
     * @param {String} name
     * The reference name of the #CFG.
     */
    removeConfigurationProperty: function( name ){
        delete this.CFG[name];
    },
    
    /**
     * @method
     * Retrieves the entire configuration.
     * @returns {Object} 
     */
    getConfiguration: function() {
        return this.CFG;
    },
    
    /**
     * @method
     * Clears the entire configuration. 
     */
    clearConfiguration: function() {
        this.CFG = {};
    },
    
    /**
     * @method
     * Manually set the configuration (#CFG).
     * @param {Object} value 
     * A key/value object.
     */
    setConfiguration: function( value ) {
        if (typeof value !== 'object')
            throw Error('Configuration must be a key/value object.');
        this.CFG = value;
    },
    
    /**
      * @method
      * Register a server 
	  * @param {NGN.core.Server}
	  * The server instance
      */     	
     registerServer: function(server){
     	if (this.SERVER['__'+server.type] == undefined)
     		this.SERVER['__'+server.type] = {};
     	var ct = 0;
     	while (this.SERVER['__'+server.type][server.name] !== undefined || this.SERVER[server.name] !== undefined ){
     		ct++;
     		server.name = server.name + ct.toString();
     	}
     	this.SERVER['__'+server.type][server.name] = server;
     	this.SERVER[server.name] = server;
     	this.onRegisterServer(server);
     	return server.name;
     },
     
     /**
      * @method
      * Unregister a server. This will remove the instance from the application.
      * 
      */
     unregisterServer: function(name) {
     	this.onUnregisterServer(this.SERVER[name]);
     	delete this.SERVER[name];
     },
     
     /**
      * @method
      * Get a specific server instance by name.
      */
     getServer: function(name){
     	return this.SERVER[name];
     },
     
     /**
      * @method
      * Get servers by a specific type. This returns an object with each attribute of the
      * object being the name of a server and each value being a reference to the server object. 
	  * @param {String} type
	  * @returns {Object}
      */
     getServersByType: function(type){
     	return this.SERVER[type] || {};
     },
    
    /**
     * @method
     * Recursively traverse a namespace and apply new configuration elements to classes.
     * @param {Object}
     * The namesapce object.
     * @param {Object}
     * The configuration to apply to the object.
     * @private   
     */
    traverse: function( obj, newConfig ) {
        var me = this;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ( typeof obj[key] == "object"){
                    console.log(key.magenta+' is an object'.cyan);
                    me.traverse(obj[key]);
                } else if (typeof obj[key] == 'function'){
                    // This is where the classes exist
                    //obj[key].apply(newConfig);
                    console.log(key.yellow.bold+' is a class'.green);
                    console.log(obj[key]);
                }
            }
        }
    },
    
    /**
     * @method
     * Generate a UUID.
     * 
     * **Simple Example**
     * 
     * 		console.log(NGN.uuid()); // --> Outputs a time-based UUID.
     * 		console.log(NGN.uuid(true)); // --> Outputs a random UUID.
     * 
     * @param {Boolean} [random=false]
     * Setting this to `true` generates a random UUID. Otherwise, a time-based UUID is created.
     * @param {Object} [options]
     * Properties may include:
     * 
	 * * `random` - ({Number}[16]) Array of 16 numbers (0-255) to use in place of randomly generated values
	 * * `rng` - ({Function}) Random # generator to use.  Set to one of the built-in generators - `uuid.mathRNG` (all platforms), `uuid.nodeRNG` (node.js only), `uuid.whatwgRNG` (WebKit only) - or a custom function that returns an array[16] of byte values.
	 * * `buffer` - ({Array/Buffer}) Array or buffer where UUID bytes are to be written.
	 * * `offset` - ({Number}) Starting index in `buffer` at which to begin writing.
	 * @param {Array/Buffer}
	 * Array or buffer where UUID bytes are to be written.
	 * @param {Number} Starting index in `buffer` at which to begin writing.
     * @returns {String}
     */
    uuid: function(random, options, buffer, offset){
    	random = random || false;
    	return random == true ? require('node-uuid').v4(options||null,buffer||null,offset||null) : require('node-uuid').v1(options||null,buffer||null,offset||null);
    },
    
    /**
     * @method
     * Broadcast an event on the #BUS.
     * @param {String} eventName (required)
     * @param {Object} [metadata]
     */
    broadcast: function( eventName, metadata ) {
        this.BUS.emit(eventName, metadata || null);
    },
    
    /**
     * @method
     * A shortcut for creating a new application. This can only be done once per node process (i.e. `node myapp.js`).
     * 
     * **Example: myapp.js**
     * 		NGN.createApp({
     * 			name: 'myApp'
     * 		});
     * 		
     * 		console.log(application.name); // --> myApp
     * 
     * @param {Object} config
     * For a list of configuration options, please see NGN.app.Application.
     */
    app: function(config) {
    	if (global.application == undefined){
	    	var app = new __NGN.app.Application(config);
    	}
    },
    
    /**
     * @method
     * Listens for an event on the #BUS and runs the callback when it is recognized.
     * @param {String} eventName
     * @param {Function} callback
     */
    on: function( eventName, callback ) {
        this.BUS.addListener(eventName, callback || function(){});
    },
    
    /**
     * @event error
     * Fired whenever an error is detected 
     */
    onError: function(e){
    	this.fireError(e);
    },
    
    /**
     * @event registerserver
     * Fired when a server is registered
     * @returns {NGN.core.Server/null}
     */
    onRegisterServer: function(server){
    	this.fireEvent('serverunregistered',server||null);
    },
    
    /**
     * @event unregisterserver
     * Fired when a server is unregistered/removed
     * @returns {NGN.core.Server/null}
     */
    onRegisterServer: function(server){
    	this.fireEvent('unregisterserver',server||null);
    }
});	


// Export the module as a global variable
global.__NGN = global.NGN = new NGN();

// Create a global namespace for NGNX
/**
 * @class NGNX
 * A library of common extensions.
 * 
 * NGNX extends {@link #NGN} with classes to support common application logic. They're intentionally
 * separated because each class represents is considered opinionated. By abstracting this
 * library from NGN, developers are given a choice about how they define the objects and API's
 * in their application. 
 * 
 * NGNX strives to cover common ground, but will still likely require additional expansion
 * to meet specific application needs. This library is supported in that the classes will function,
 * but it does not warrant that the library will be suitable for every use case. In other words,
 * developers can rely on the existence of these objects, but should remember that the classes in
 * this library are a _best effort_ from NGN developers and contributors to reduce as much boilerplate 
 * code as possible. The goal of NGN & this extension library is to reduce developer's work, not do it
 * for them.
 * @singleton
 * 
 */
global.__NGNX = global.NGNX = __NGN.ngnx || {};

// Remove redundant namespace for NGNX
if (__NGN.ngnx !== undefined)
	delete __NGN.ngnx;

// Include any API extensions (../api)
var ng          = {};
function extendAPI(dir) {
	
	var newglobals = fs.readdirSync(dir);

	// Add custom extension libraries
	for (var i=0; i<newglobals.length; i++){
	    if (    newglobals[i].indexOf('.js') < 0 
	        &&  newglobals[i].indexOf('.md') < 0 
	        &&  newglobals[i].indexOf('.json') < 0
	        // Add more?
	    ) {
	        // New global variables
	        ng[newglobals[i]] = {};
	        require('wrench').readdirSyncRecursive(dir+'/'+newglobals[i]).forEach(function( file ){
	            if (__dirname+'/'+file !== __filename && file.indexOf('.js') >= 0) {
	                var path    = file.replace(/\\/gi,'/').replace(/\/\//gi,'/').replace(/\.js/gi,'').split('/'),
	                    pkg     = ng[newglobals[i]];
	              
	                for (var position=0; position<path.length; position++) {
	                    
	                    if (pkg[path[position]] == undefined)
	                        pkg[path[position]] = position == path.length-1 ? require(dir+'/'+newglobals[i]+'/'+file) : {};
	                    
	                    if (position !== path.length-1)
	                        pkg = pkg[path[position]];
	                }   
	            }
	        });
	        global[newglobals[i].toUpperCase()] =
	        global[newglobals[i].toLowerCase()] =
	        global[newglobals[i]] = ng[newglobals[i]];
	        
	        global.__NGN._xtn.push(newglobals[i]);
	    }
	}
}

/*
 * Process the configuration
 * Look for a configuration file called ngn.config.json 
 */
var root = process.mainModule.filename.replace(/\\/gi,'/');
root = root.replace('/'+root.split('/')[root.split('/').length-1],'');
if (fs.existsSync(root+'/ngn.config.json')) {
	var _cfg = require(root+'/ngn.config.json');
	for (var item in _cfg){
		if (_cfg.hasOwnProperty(item)){
			switch (item.trim().toLowerCase()) {
				case 'extensions':
					if (Array.isArray(_cfg[item])) {
						for (var i=0;i<_cfg[item].length;i++){
							if (!fs.existsSync(_cfg[item][i]))
								throw Error('Unable to instantiate API at '+_cfg['configuration'][i]);
							else
								extendAPI(_cfg[item][i].replace(/\\/gi,'/'));
						}
					}
					break;
				/*case 'application':
					for(var appItem in _cfg['application']){
						if(_cfg['application'].hasOwnProperty(appItem)){
							global.application[appItem] = _cfg['application'][appItem]; 
						}
					}
					break;*/
				default:
					currentEnv = (process.env.NODE_ENV||'default').toString().trim().toLowerCase();
					if (currentEnv == item.trim().toLowerCase()){
						for(var prop in _cfg[item]){
							if (_cfg[item].hasOwnProperty(prop)){
								global.__NGN.createConfigurationProperty(prop,_cfg[item][prop]);
							}
						}
					}
					break;
			}
		}
	}
}

// Export as module
module.exports = exports = function( config ) {
    
    var scope = typeof config == 'string' ? config : null; 
    
    config = config || {};
    
    scope = scope !== null ? scope : (config.scope == 'application' ? 'NGN' : config.scope || 'NGN');
    
    if (scope !== 'NGN')
        delete global.NGN;
    
    if ( typeof config === 'object' ) {
        if (config.scope !== undefined)
            delete config.scope;
        global.__NGN = new NGN(config);
    }
    
    global[scope.toUpperCase()] =
    global[scope.toLowerCase()] =
    global[scope] = global.__NGN;

};