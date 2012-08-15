Ext.data.JsonP.NGN_web_Processor({"meta":{"author":["Corey Butler"],"private":true},"parentMixins":[],"inheritdoc":null,"enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><strong>NGN.web.Processor</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/NGNX.web.ApiRequestHelper' rel='NGNX.web.ApiRequestHelper' class='docClass'>NGNX.web.ApiRequestHelper</a></div><div class='dependency'><a href='#!/api/NGNX.web.WebRequestHelper' rel='NGNX.web.WebRequestHelper' class='docClass'>NGNX.web.WebRequestHelper</a></div><h4>Files</h4><div class='dependency'><a href='source/Processor.html#NGN-web-Processor' target='_blank'>Processor.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>A middleware class for processing web requests with custom logic.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-enabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-cfg-enabled' class='name expandable'>enabled</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>If this is set to false, the processor is ignored. ...</div><div class='long'><p>If this is set to <code>false</code>, the processor is ignored.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-fn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-cfg-fn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-cfg-fn' class='name expandable'>fn</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function used for processing the request. ...</div><div class='long'><p>The function used for processing the request. This method receives three arguments: <code>request</code>, <code>response</code>, and <code>continue</code> (respectively).\n<code>continue</code> is a method that should always be executed at the end of the processor, otherwise the request may hang. This is automatically\ndone if #ignoreContinue is <code>false</code>.</p>\n\n<p><strong>Example</strong></p>\n\n<pre><code>    function(req,res,cont){\n        if (request.)\n</code></pre>\n\n<p>}</p>\n</div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-cfg-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of processor. ...</div><div class='long'><p>The type of processor. Acceptable values are listed in the order executed:</p>\n\n<ul>\n<li>preauthentication</li>\n<li>postauthentication</li>\n<li>preauthorization</li>\n<li>postauthorization</li>\n<li>prerequest</li>\n<li>postrequest</li>\n</ul>\n\n\n<p>These are only processed if the NGN.core.HttpServers uses them.</p>\n<p>Defaults to: <code>prerequest</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-processor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-property-processor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-property-processor' class='name not-expandable'>processor</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>The processor function.</p>\n</div><div class='long'><p>The processor function.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div><div id='property-used' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-property-used' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-property-used' class='name expandable'>used</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>@proeprty {Boolean}\nIndicates the processor instance is currently in use by a NGN.core.HttpServer. ...</div><div class='long'><p>@proeprty {Boolean}\nIndicates the processor instance is currently in use by a <a href=\"#!/api/NGN.core.HttpServer\" rel=\"NGN.core.HttpServer\" class=\"docClass\">NGN.core.HttpServer</a>.</p>\n<p>Defaults to: <code>{value: false, enumerable: false, writable: true}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-disable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable the middleware ...</div><div class='long'><p>Disable the middleware</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable the middleware ...</div><div class='long'><p>Enable the middleware</p>\n</div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.Processor'>NGN.web.Processor</span><br/><a href='source/Processor.html#NGN-web-Processor-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.Processor-method-toggle' class='name expandable'>toggle</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Toggle the middleware on/off ...</div><div class='long'><p>Toggle the middleware on/off</p>\n</div></div></div></div></div></div></div>","aliases":{},"html_meta":{"author":null,"private":null},"subclasses":["NGNX.web.ApiRequestHelper","NGNX.web.WebRequestHelper"],"inheritable":null,"uses":[],"extends":"Class","tagname":"class","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"meta":{},"owner":"NGN.web.Processor","tagname":"method","name":"disable","id":"method-disable"},{"meta":{},"owner":"NGN.web.Processor","tagname":"method","name":"enable","id":"method-enable"},{"meta":{},"owner":"Class","tagname":"method","name":"extend","id":"method-extend"},{"meta":{"private":true},"owner":"Class","tagname":"method","name":"merge","id":"method-merge"},{"meta":{},"owner":"NGN.web.Processor","tagname":"method","name":"toggle","id":"method-toggle"}],"cfg":[{"meta":{},"owner":"NGN.web.Processor","tagname":"cfg","name":"enabled","id":"cfg-enabled"},{"meta":{},"owner":"NGN.web.Processor","tagname":"cfg","name":"fn","id":"cfg-fn"},{"meta":{},"owner":"NGN.web.Processor","tagname":"cfg","name":"type","id":"cfg-type"}],"property":[{"meta":{},"owner":"NGN.web.Processor","tagname":"property","name":"processor","id":"property-processor"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"prototype","id":"property-prototype"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"super","id":"property-super"},{"meta":{"private":true},"owner":"NGN.web.Processor","tagname":"property","name":"used","id":"property-used"}],"css_var":[],"event":[]},"superclasses":["Class"],"private":true,"requires":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[],"event":[]},"component":false,"name":"NGN.web.Processor","override":null,"mixins":[],"id":"class-NGN.web.Processor","linenr":3,"mixedInto":[],"files":[{"href":"Processor.html#NGN-web-Processor","filename":"Processor.js"}]});