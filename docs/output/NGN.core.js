Ext.data.JsonP.NGN_core({"meta":{"aside":[{"type":"guide","name":"class_system"}],"private":true},"parentMixins":[],"inheritdoc":null,"enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><strong>NGN.core</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/NGN' rel='NGN' class='docClass'>NGN</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/NGN.Patterns' rel='NGN.Patterns' class='docClass'>NGN.Patterns</a></div><div class='dependency'><a href='#!/api/NGN.core.Command' rel='NGN.core.Command' class='docClass'>NGN.core.Command</a></div><div class='dependency'><a href='#!/api/NGN.core.HttpClient' rel='NGN.core.HttpClient' class='docClass'>NGN.core.HttpClient</a></div><div class='dependency'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='docClass'>NGN.core.Server</a></div><div class='dependency'><a href='#!/api/NGN.core.Syslog' rel='NGN.core.Syslog' class='docClass'>NGN.core.Syslog</a></div><div class='dependency'><a href='#!/api/NGN.datasource.Client' rel='NGN.datasource.Client' class='docClass'>NGN.datasource.Client</a></div><div class='dependency'><a href='#!/api/NGN.datasource.Connection' rel='NGN.datasource.Connection' class='docClass'>NGN.datasource.Connection</a></div><div class='dependency'><a href='#!/api/NGN.mail.Attachment' rel='NGN.mail.Attachment' class='docClass'>NGN.mail.Attachment</a></div><div class='dependency'><a href='#!/api/NGN.mail.Message' rel='NGN.mail.Message' class='docClass'>NGN.mail.Message</a></div><div class='dependency'><a href='#!/api/NGN.util.Template' rel='NGN.util.Template' class='docClass'>NGN.util.Template</a></div><div class='dependency'><a href='#!/api/NGN.web.proxy.RewriteRule' rel='NGN.web.proxy.RewriteRule' class='docClass'>NGN.web.proxy.RewriteRule</a></div><div class='dependency'><a href='#!/api/NGN.web.proxy.VirtualHost' rel='NGN.web.proxy.VirtualHost' class='docClass'>NGN.web.proxy.VirtualHost</a></div><div class='dependency'><a href='#!/api/NGNX.Email' rel='NGNX.Email' class='docClass'>NGNX.Email</a></div><div class='dependency'><a href='#!/api/NGNX.Login' rel='NGNX.Login' class='docClass'>NGNX.Login</a></div><div class='dependency'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='docClass'>NGNX.Person</a></div><h4>Files</h4><div class='dependency'><a href='source/NGN.core.html#NGN-core' target='_blank'>NGN.core.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n<p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>This singleton exposes core business objects that node.js can use in an application. All NGN objects\ninherit this class. It should never be used directly in application logic, but it should be used to\nextend the NGN namespace/API.</p>\n\n<p>The factory provides common functionality that can be used throughout multiple objects in the\nextended API. It provides business logic that is more specific to NGN than the BaseClass.</p>\n\n<p>The following example is an extremely abbreviated version of the NGN.app.Person class.</p>\n\n<pre class='inline-example '><code><a href=\"#!/api/NGN.core\" rel=\"NGN.core\" class=\"docClass\">NGN.core</a> = require('../<a href=\"#!/api/NGN.core\" rel=\"NGN.core\" class=\"docClass\">NGN.core</a>');\n\nvar Person = <a href=\"#!/api/NGN.core-method-extend\" rel=\"NGN.core-method-extend\" class=\"docClass\">NGN.core.extend</a>({\n    constructor: function( config ){\n        Person.super.constructor.call( this, config );\n           this.first = config.first  || 'Unknown';\n        this.last  = config.last   || 'Unknown';\n        this.middle= config.middle || null\n    },\n    describe: function() {\n        console.log('This is '+this.first+' '+(this.middle!==null?this.middle:'')+this.last);\n    },\n    register: function() {\n           // Register the user or save all attributes to a database.\n    }\n});\n\n// Create a module out of this.\nmodule.exports = Person;\n</code></pre>\n\n<p>The factory provides a foundation on which the other objects can be built. Using the <code>Person</code> in the example above,\na developer could create and register a new user with the following approach:</p>\n\n<pre class='inline-example '><code>var Person = new NGN.app.Person({ first:'John', last:'Doe' }); \n\nPerson.register();\n</code></pre>\n\n<p>NGN.<strong>user</strong>.Person is a dynamically constructed namespace, created primarily to more easily understand the business\nlogic of the API. <a href=\"#!/api/NGN\" rel=\"NGN\" class=\"docClass\">NGN</a> is responsible for constructing this namespace.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_emitter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/NGN.core-method-constructor' class='name expandable'>NGN.core</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Create an NGN core class. ...</div><div class='long'><p>Create an NGN core class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEventListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error error]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the NGN#BUS.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-error' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core'>NGN.core</span><br/><a href='source/NGN.core.html#NGN-core-event-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-event-error' class='name expandable'>error</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> e</span> )</div><div class='description'><div class='short'>Fired when an error occurs ...</div><div class='long'><p>Fired when an error occurs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","aliases":{},"html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n"],"private":null},"subclasses":["NGN.core.Command","NGN.core.HttpClient","NGN.core.Server","NGN.core.Syslog","NGN.datasource.Client","NGN.datasource.Connection","NGN.mail.Attachment","NGN.mail.Message","NGNX.Email","NGNX.Login","NGNX.Person","NGN.Patterns","NGN.util.Template","NGN.web.proxy.RewriteRule","NGN.web.proxy.VirtualHost"],"inheritable":null,"uses":[],"extends":"Class","tagname":"class","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"meta":{},"owner":"NGN.core","tagname":"method","name":"constructor","id":"method-constructor"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"addEventListeners","id":"method-addEventListeners"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"emit","id":"method-emit"},{"meta":{},"owner":"Class","tagname":"method","name":"extend","id":"method-extend"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"fireError","id":"method-fireError"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"fireEvent","id":"method-fireEvent"},{"meta":{"private":true},"owner":"Class","tagname":"method","name":"merge","id":"method-merge"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"on","id":"method-on"}],"cfg":[],"property":[{"meta":{"protected":true},"owner":"NGN.core","tagname":"property","name":"_emitter","id":"property-_emitter"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"prototype","id":"property-prototype"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"super","id":"property-super"}],"css_var":[],"event":[{"meta":{},"owner":"NGN.core","tagname":"event","name":"error","id":"event-error"}]},"superclasses":["Class"],"private":true,"requires":["NGN"],"singleton":true,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[],"event":[]},"component":false,"name":"NGN.core","override":null,"mixins":[],"id":"class-NGN.core","linenr":4,"mixedInto":[],"files":[{"href":"NGN.core.html#NGN-core","filename":"NGN.core.js"}]});