Ext.data.JsonP.Class({"meta":{"aside":[{"type":"guide","name":"class_system"}],"docauthor":["Corey Butler"]},"parentMixins":[],"inheritdoc":null,"enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a></div><div class='dependency'><a href='#!/api/NGN.web.Processor' rel='NGN.web.Processor' class='docClass'>NGN.web.Processor</a></div><h4>Files</h4><div class='dependency'><a href='source/BaseClass.html#Class' target='_blank'>BaseClass.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n<p>A base class providing a simple inheritance model for JavaScript classes. All\nAPI classes are an extension of this model.<br/><br/>\n<strong>Example:</strong></p>\n\n<pre><code>   // Superclass\nvar Vehicle = <a href=\"#!/api/Class-method-extend\" rel=\"Class-method-extend\" class=\"docClass\">Class.extend</a>({\n    constructor: function (type) {\n        this.type = type;\n    },\n    accelerate: function() {\n        return this.type+' is accelerating';\n    }\n});\n\n// Subclass\nvar Car = Vehicle.extend({\n    constructor: function (doorCount) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doorCount || 4, // Default = 4\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n\nvar mustang = new Car(2);\nmustang.accelerate();\n\n//Outputs: The 2-door car is accelerating.\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-prototype' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Class'>Class</span><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Class'>Class</span><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-extend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Class'>Class</span><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Class'>Class</span><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","aliases":{},"html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n"],"docauthor":null},"subclasses":["NGN.core","NGN.web.Processor"],"inheritable":null,"uses":[],"extends":null,"tagname":"class","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"meta":{},"owner":"Class","tagname":"method","name":"extend","id":"method-extend"},{"meta":{"private":true},"owner":"Class","tagname":"method","name":"merge","id":"method-merge"}],"cfg":[],"property":[{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"prototype","id":"property-prototype"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"super","id":"property-super"}],"css_var":[],"event":[]},"superclasses":[],"private":null,"requires":[],"singleton":false,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[],"event":[]},"component":false,"name":"Class","override":null,"mixins":[],"id":"class-Class","linenr":1,"mixedInto":[],"files":[{"href":"BaseClass.html#Class","filename":"BaseClass.js"}]});