Ext.data.JsonP.NGN({"meta":{"aside":[{"type":"guide","name":"ngn_namespace"},{"type":"guide","name":"global_features"},{"type":"guide","name":"application_scope"}]},"parentMixins":[],"inheritdoc":null,"enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/NGN.html#NGN' target='_blank'>NGN.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/ngn_namespace'><img src='guides/ngn_namespace/icon.png' alt=''> NGN Namespace</a></p>\n            </div>\n            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/global_features'><img src='guides/global_features/icon.png' alt=''> Global Features</a></p>\n            </div>\n            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_scope'><img src='guides/application_scope/icon.png' alt=''> Application Scope</a></p>\n            </div>\n<p>For information about using the NGN namespace, please see the <a href=\"#!/guide/ngn_namespace\">NGN Namespace Guide</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-namespace' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-cfg-namespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-cfg-namespace' class='name expandable'>namespace</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Used for instantiation. ...</div><div class='long'><p>Used for instantiation.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='static-property-_cwd' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-static-property-_cwd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-static-property-_cwd' class='name expandable'>_cwd</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>The root directory in which the node process is running (cwd). ...</div><div class='long'><p>The root directory in which the node process is running (cwd). For example, running\n<code>node /path/to/myapp.js</code> would be <code>/path/to</code>.</p>\n<p>Defaults to: <code>{value: null, enumerable: false, writable: true}</code></p></div></div></div><div id='property-_xtn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-property-_xtn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-property-_xtn' class='name expandable'>_xtn</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature'>private</strong><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Stores the extension names. ...</div><div class='long'><p>Stores the extension names. Primarily used for <a href=\"#!/api/NGN-method-getExtensions\" rel=\"NGN-method-getExtensions\" class=\"docClass\">getExtensions</a></p>\n<p>Defaults to: <code>{value: [], enumerable: false, writable: true}</code></p></div></div></div><div id='property-command' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-property-command' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-property-command' class='name not-expandable'>command</a><span> : <a href=\"#!/api/NGN.core.Command\" rel=\"NGN.core.Command\" class=\"docClass\">NGN.core.Command</a></span></div><div class='description'><div class='short'><p>A reference to the command line interface.</p>\n</div><div class='long'><p>A reference to the command line interface.</p>\n</div></div></div><div id='property-cwd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-property-cwd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-property-cwd' class='name expandable'>cwd</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'>The current working directory. ...</div><div class='long'><p>The current working directory. This is the same as #rootDir.</p>\n</div></div></div><div id='static-property-dns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-static-property-dns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-static-property-dns' class='name expandable'>dns</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>A convenience reference to node's dns object. ...</div><div class='long'><p>A convenience reference to node's <a href=\"http://nodejs.org/api/dns.html\">dns</a> object.</p>\n\n<p>This object contains several methods for DNS requests.</p>\n\n<ul>\n<li><strong>NGN.DNS.lookup(domain, [family], callback)</strong></li>\n<li><strong>NGN.DNS.resolve(domain, [rrtype], callback)</strong></li>\n<li><strong>NGN.DNS.resolve4(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolve6(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolveMx(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolveTxt(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolveSrv(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolveNs(domain, callback)</strong></li>\n<li><strong>NGN.DNS.resolveCname(domain, callback)</strong></li>\n<li><strong>NGN.DNS.reverse(ip, callback)</strong></li>\n</ul>\n\n</div></div></div><div id='static-property-os' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-static-property-os' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-static-property-os' class='name expandable'>os</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>A convenience reference to node's os object. ...</div><div class='long'><p>A convenience reference to node's <a href=\"http://nodejs.org/api/os.html\">os</a> object.</p>\n\n<p>This object contains several methods to reveal OS-level information:</p>\n\n<ul>\n<li><strong>NGN.OS.tmpDir()</strong></li>\n<li><strong>NGN.OS.hostname()</strong></li>\n<li><strong>NGN.OS.type()</strong></li>\n<li><strong>NGN.OS.platform()</strong></li>\n<li><strong>NGN.OS.arch()</strong></li>\n<li><strong>NGN.OS.release()</strong></li>\n<li><strong>NGN.OS.uptime()</strong></li>\n<li><strong>NGN.OS.loadavg()</strong></li>\n<li><strong>NGN.OS.totalmem()</strong></li>\n<li><strong>NGN.OS.freemem()</strong></li>\n<li><strong>NGN.OS.cpus()</strong></li>\n<li><strong>NGN.OS.networkInterfaces()</strong></li>\n<li><strong>NGN.OS.EOL</strong></li>\n<li><strong>NGN.OS.fileSeparator</strong></li>\n</ul>\n\n</div></div></div><div id='static-property-path' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-static-property-path' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-static-property-path' class='name expandable'>path</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>A convenience reference to node's path object. ...</div><div class='long'><p>A convenience reference to node's <a href=\"http://nodejs.org/api/path.html\">path</a> object.</p>\n\n<p>This object contains several methods for string manipulation of filepaths.</p>\n\n<ul>\n<li><strong>NGN.path.normalize('/foo/bar//baz/asdf/quux/..')</strong> returns <code>'/foo/bar/baz/asdf'</code></li>\n<li><strong>NGN.path.join([path1], [path2], [...])</strong> returns `'path1/path2'</li>\n<li><strong>NGN.path.resolve([from ...], to)</strong> resolves to an absolute path.</li>\n<li><strong>NGN.path.relative(from, to)</strong> resolves to a relative directory path. This is used when traversing from one directory to another.</li>\n<li><strong>NGN.path.dirname(p)</strong> if p = '/my/path', returns <code>/my/path</code></li>\n<li><strong>NGN.path.basename(p, [ext])</strong> returns the filename portion of the path.</li>\n<li><strong>NGN.path.extname(p)</strong> returns the extension of the filename portion of the path.</li>\n</ul>\n\n</div></div></div><div id='static-property-pathSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-static-property-pathSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-static-property-pathSeparator' class='name expandable'>pathSeparator</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>The platform-specific path separator. ...</div><div class='long'><p>The platform-specific path separator. <code>\\\\</code> or <code>/</code>.</p>\n</div></div></div><div id='property-pattern' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-property-pattern' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-property-pattern' class='name not-expandable'>pattern</a><span> : <a href=\"#!/api/NGN.Patterns\" rel=\"NGN.Patterns\" class=\"docClass\">NGN.Patterns</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>A reference to common RegExp patterns.</p>\n</div><div class='long'><p>A reference to common RegExp patterns.</p>\n</div></div></div><div id='property-version' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-property-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-property-version' class='name not-expandable'>version</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>The running version of NGN.</p>\n</div><div class='long'><p>The running version of NGN.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-application' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-application' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-application' class='name expandable'>application</a>( <span class='pre'>String/URL/Object/Filepath config, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Create or load an application. ...</div><div class='long'><p>Create or load an application.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : String/URL/Object/Filepath<div class='sub-desc'><p>This argument defines the configuration available to the application. There are several options:</p>\n\n<ul>\n<li><h1>String: If a simple string is provided, NGN will look for a local NGN Application Server and use the configuration it provides.</h1></li>\n<li>URL: Supports loading a configuration from a remote NGN Application Server.</li>\n<li><h1>Object: This is the manual way of configuring the application. (TODO: Reference Guide)</h1></li>\n<li>Filepath: NGN will <code>require</code> this file, assuming it to be either a module or JSON object.</li>\n</ul>\n\n\n<p>All methods must provide a valid configuration.\nTODO: Write the configuration guide.\nThis currently isn't working, but has been included for forward compatibility.</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>This method is executed after the configuration is loaded. This is similar to launching your application in an \"onReady\" fashion.</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-clone' class='name expandable'>clone</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> noCircular]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Deep clones an object and returns it as a copy (not a reference). ...</div><div class='long'><p>Deep clones an object and returns it as a copy (not a reference).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object to clone.</p>\n</div></li><li><span class='pre'>noCircular</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Set this to true if you are certain there are no circular references\nin the object (performance gain).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-coalesce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-coalesce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-coalesce' class='name expandable'>coalesce</a>( <span class='pre'>Mixed args</span> )</div><div class='description'><div class='short'>Finds the first non-null/defined value in a list of arguments. ...</div><div class='long'><p>Finds the first non-null/defined value in a list of arguments.\nThis can be used with {Boolean} values, since <code>true</code>/<code>false</code> is a\nnon-null/defined value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Mixed<div class='sub-desc'><p>Any number of arguments can be passed to this method.</p>\n</div></li></ul></div></div></div><div id='method-define' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-define' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-define' class='name expandable'>define</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> target, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> )</div><div class='description'><div class='short'>A shortcut method for creating new classes. ...</div><div class='long'><p>A shortcut method for creating new classes.</p>\n\n<pre><code>    <a href=\"#!/api/NGN-method-define\" rel=\"NGN-method-define\" class=\"docClass\">NGN.define</a>('ORG.team.Member',{\n        extend: 'NGN.app.Person',\n        boss: 'CEO',\n        division: 'Executive',\n        paygrade: 2,\n\n        getOfficialTitle: function(role){\n            return role+', Office of the CEO'\n        }\n    });\n</code></pre>\n\n<p>The example above would extend <code>NGN.app.Person</code> to create <code>ORG.team.Person</code>.\nIf the <code>ORG.team</code> namespace does not exist, it will be created\ndynamically before creating the new class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the new class.</p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The configuration/extended structure to apply to the object.</p>\n</div></li></ul></div></div></div><div id='method-emptyFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-emptyFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-emptyFn' class='name expandable'>emptyFn</a>( <span class='pre'></span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>{Function}\nAn void function. ...</div><div class='long'><p>{Function}\nAn void function.</p>\n</div></div></div><div id='method-exec' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-exec' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-exec' class='name expandable'>exec</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>A convenience method for using NGN.core.Command.exec. ...</div><div class='long'><p>A convenience method for using <a href=\"#!/api/NGN.core.Command-method-exec\" rel=\"NGN.core.Command-method-exec\" class=\"docClass\">NGN.core.Command.exec</a>.</p>\n</div></div></div><div id='method-getExtensions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-getExtensions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-getExtensions' class='name expandable'>getExtensions</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Get the custom extensions available to the application. ...</div><div class='long'><p>Get the custom extensions available to the application.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-traverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-traverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-traverse' class='name expandable'>traverse</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> newConfig</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Recursively traverse a namespace and apply new configuration elements to classes. ...</div><div class='long'><p>Recursively traverse a namespace and apply new configuration elements to classes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The namesapce object.</p>\n</div></li><li><span class='pre'>newConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The configuration to apply to the object.</p>\n</div></li></ul></div></div></div><div id='method-typeOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-typeOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-typeOf' class='name expandable'>typeOf</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the type of a specific object. ...</div><div class='long'><p>Get the type of a specific object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-uuid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN'>NGN</span><br/><a href='source/NGN.html#NGN-method-uuid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN-method-uuid' class='name expandable'>uuid</a>( <span class='pre'>[<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> random], [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> options], Array/Buffer buffer, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> Starting</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Generate a UUID. ...</div><div class='long'><p>Generate a UUID.</p>\n\n<p><strong>Simple Example</strong></p>\n\n<pre><code>    console.log(<a href=\"#!/api/NGN-method-uuid\" rel=\"NGN-method-uuid\" class=\"docClass\">NGN.uuid</a>()); // --&gt; Outputs a time-based UUID.\n    console.log(<a href=\"#!/api/NGN-method-uuid\" rel=\"NGN-method-uuid\" class=\"docClass\">NGN.uuid</a>(true)); // --&gt; Outputs a random UUID.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>random</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Setting this to <code>true</code> generates a random UUID. Otherwise, a time-based UUID is created.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Properties may include:</p>\n\n<ul>\n<li><code>random</code> - ({Number}[16]) Array of 16 numbers (0-255) to use in place of randomly generated values</li>\n<li><code>rng</code> - ({Function}) Random # generator to use.  Set to one of the built-in generators - <code>uuid.mathRNG</code> (all platforms), <code>uuid.nodeRNG</code> (node.js only), <code>uuid.whatwgRNG</code> (WebKit only) - or a custom function that returns an array[16] of byte values.</li>\n<li><code>buffer</code> - ({Array/Buffer}) Array or buffer where UUID bytes are to be written.</li>\n<li><code>offset</code> - ({Number}) Starting index in <code>buffer</code> at which to begin writing.</li>\n</ul>\n\n</div></li><li><span class='pre'>buffer</span> : Array/Buffer<div class='sub-desc'><p>Array or buffer where UUID bytes are to be written.</p>\n</div></li><li><span class='pre'>Starting</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>index in <code>buffer</code> at which to begin writing.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","aliases":{},"html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/ngn_namespace'><img src='guides/ngn_namespace/icon.png' alt=''> NGN Namespace</a></p>\n            </div>\n","            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/global_features'><img src='guides/global_features/icon.png' alt=''> Global Features</a></p>\n            </div>\n","            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_scope'><img src='guides/application_scope/icon.png' alt=''> Application Scope</a></p>\n            </div>\n"]},"subclasses":[],"inheritable":null,"uses":[],"extends":null,"tagname":"class","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"meta":{},"owner":"NGN","tagname":"method","name":"application","id":"method-application"},{"meta":{},"owner":"NGN","tagname":"method","name":"clone","id":"method-clone"},{"meta":{},"owner":"NGN","tagname":"method","name":"coalesce","id":"method-coalesce"},{"meta":{},"owner":"NGN","tagname":"method","name":"define","id":"method-define"},{"meta":{"protected":true},"owner":"NGN","tagname":"method","name":"emptyFn","id":"method-emptyFn"},{"meta":{},"owner":"NGN","tagname":"method","name":"exec","id":"method-exec"},{"meta":{},"owner":"NGN","tagname":"method","name":"getExtensions","id":"method-getExtensions"},{"meta":{"private":true},"owner":"NGN","tagname":"method","name":"traverse","id":"method-traverse"},{"meta":{},"owner":"NGN","tagname":"method","name":"typeOf","id":"method-typeOf"},{"meta":{},"owner":"NGN","tagname":"method","name":"uuid","id":"method-uuid"}],"cfg":[{"meta":{"private":true},"owner":"NGN","tagname":"cfg","name":"namespace","id":"cfg-namespace"}],"property":[{"meta":{"static":true,"readonly":true},"owner":"NGN","tagname":"property","name":"_cwd","id":"static-property-_cwd"},{"meta":{"protected":true,"private":true},"owner":"NGN","tagname":"property","name":"_xtn","id":"property-_xtn"},{"meta":{},"owner":"NGN","tagname":"property","name":"command","id":"property-command"},{"meta":{"readonly":true},"owner":"NGN","tagname":"property","name":"cwd","id":"property-cwd"},{"meta":{"static":true,"readonly":true},"owner":"NGN","tagname":"property","name":"dns","id":"static-property-dns"},{"meta":{"static":true,"readonly":true},"owner":"NGN","tagname":"property","name":"os","id":"static-property-os"},{"meta":{"static":true,"readonly":true},"owner":"NGN","tagname":"property","name":"path","id":"static-property-path"},{"meta":{"static":true,"readonly":true},"owner":"NGN","tagname":"property","name":"pathSeparator","id":"static-property-pathSeparator"},{"meta":{"readonly":true},"owner":"NGN","tagname":"property","name":"pattern","id":"property-pattern"},{"meta":{"readonly":true},"owner":"NGN","tagname":"property","name":"version","id":"property-version"}],"css_var":[],"event":[]},"superclasses":[],"private":null,"requires":[],"singleton":true,"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[],"event":[]},"component":false,"name":"NGN","override":null,"mixins":[],"id":"class-NGN","linenr":1,"mixedInto":[],"files":[{"href":"NGN.html#NGN","filename":"NGN.js"}]});