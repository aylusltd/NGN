Ext.data.JsonP.proxycontroller({"guide":"<h1>Proxy Servers &amp; Controllers</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/proxycontroller-section-1'>Example Implementation</a></li>\n<li><a href='#!/guide/proxycontroller-section-2'>List All</a></li>\n<li><a href='#!/guide/proxycontroller-section-3'>Virtual Hosts</a></li>\n<li><a href='#!/guide/proxycontroller-section-4'>Aliases</a></li>\n<li><a href='#!/guide/proxycontroller-section-5'>Target/Destination Servers</a></li>\n<li><a href='#!/guide/proxycontroller-section-6'>URL Rewrite Rules</a></li>\n</ol>\n</div>\n\n<p>NGN provides a simple reverse proxy server with methods for creating virtual\nhosts, simple round-robin load balancing, aliasing, and URL rewrites.\nThese features are available through the <a href=\"#!/api/NGN.web.Proxy\" rel=\"NGN.web.Proxy\" class=\"docClass\">NGN.web.Proxy</a> server object.</p>\n\n<p><a href=\"#!/api/NGN.web.Proxy\" rel=\"NGN.web.Proxy\" class=\"docClass\">NGN.web.Proxy</a> wraps <a href=\"http://github.com/nodejitsu/http-proxy\">http-proxy</a>\nwith configuration helper methods. It abstracts the concept of virtual\nhosts and URL rewriting into <a href=\"#!/api/NGN.web.proxy.VirtualHost\" rel=\"NGN.web.proxy.VirtualHost\" class=\"docClass\">NGN.web.proxy.VirtualHost</a> and <a href=\"#!/api/NGN.web.proxy.RewriteRule\" rel=\"NGN.web.proxy.RewriteRule\" class=\"docClass\">NGN.web.proxy.RewriteRule</a>\nrespectively. Together, these classes isolate logic in managable chunks\nand simplify control of a reverse proxy.</p>\n\n<p>The basic proxy on it's own is powerful, but it does not force developers\nto use a specific pattern for controlling/updating a proxy configuration.</p>\n\n<p>One of the core reasons the proxy server was created at all is to fill the following\ncommon use case:</p>\n\n<ul>\n<li>Support websocket traffic natively.</li>\n<li>Support simple load balancing.</li>\n<li>Support URL rewrites.</li>\n<li><em>Hot updates witout restarts.</em></li>\n<li>No additional software (i.e. Nginx, HAProxy, etc).</li>\n</ul>\n\n\n<p>NGN's classes support all of this, but they only expose the components of the\nproxy server. The NGN library does not provide an interface to manage communication with\nthese components though.</p>\n\n<p>NGNX takes proxying to the next level. <a href=\"#!/api/NGNX.web.Proxy\" rel=\"NGNX.web.Proxy\" class=\"docClass\">NGNX.web.Proxy</a> adds capabilities for reading\nand writing a <code>cache.json</code> file, which can be used to save &amp; load proxy settings.</p>\n\n<p><a href=\"#!/api/NGNX.web.ProxyController\" rel=\"NGNX.web.ProxyController\" class=\"docClass\">NGNX.web.ProxyController</a> takes this one step further by wrapping the proxy\nserver with a REST interface. REST was chosen in order to make the controller\nmore universally accessible. Developers are still free to create other wrappers,\nsuch as a websocket interface, around the proxy classes to meet specific application\nrequirements.</p>\n\n<h2 id='proxycontroller-section-1'>Example Implementation</h2>\n\n<p>The most minimal implementation would be:</p>\n\n<pre><code>require('ngn');\n\n<a href=\"#!/api/NGN-method-application\" rel=\"NGN-method-application\" class=\"docClass\">NGN.application</a>(function(){\n\n    var proxy = new <a href=\"#!/api/NGNX.web.Proxy\" rel=\"NGNX.web.Proxy\" class=\"docClass\">NGNX.web.Proxy</a>(); // Notice the 'X' in NGNX\n\n    proxy.start();\n\n    var controller = new <a href=\"#!/api/NGNX.web.ProxyController\" rel=\"NGNX.web.ProxyController\" class=\"docClass\">NGNX.web.ProxyController</a>({\n        proxy:  proxy\n    });\n\n});\n</code></pre>\n\n<p>Sometimes it is important to see what's happening when the proxy starts\nup and/or processes requests. The following example shows how events expose\nthe processes internal flow.</p>\n\n<pre><code>require('ngn');\n\n<a href=\"#!/api/NGN-method-application\" rel=\"NGN-method-application\" class=\"docClass\">NGN.application</a>(function(){\n\n    // 1. Create the proxy server\n    var proxy = new <a href=\"#!/api/NGNX.web.Proxy\" rel=\"NGNX.web.Proxy\" class=\"docClass\">NGNX.web.Proxy</a>({\n        cache: '/path/to/cache.json' // Optional\n    });\n\n    // 2. Indicate when the proxy is ready &amp; available for processing.\n    proxy.on('available',function(port){\n        console.log('Proxy available on port '.yellow+port.toString().yellow.bold);\n    });\n\n    // 3. Indicate when a request is proxied\n    proxy.on('proxy',function(){\n        console.log('Request successfully proxied.'.green);\n    });\n\n    // 4. Start the proxy\n    proxy.start();\n\n    // 5. Create a controller &amp; assign it to the proxy\n    var controller = new <a href=\"#!/api/NGNX.web.ProxyController\" rel=\"NGNX.web.ProxyController\" class=\"docClass\">NGNX.web.ProxyController</a>({\n        autoStart: false,\n        proxy:  proxy\n    });\n\n    // 6. Indicate when the proxy controller is ready to accept requests.\n    controller.on('ready',function(){\n        console.log('Proxy Controller is ready'.green);\n    });\n\n    // 7. Start the proxy controller\n    controller.start();\n\n}); \n</code></pre>\n\n<p>The code sample above could be used just like any other node file (i.e. <code>node myproxy.js</code>).</p>\n\n<p><strong>#1</strong></p>\n\n<p>The proxy controller utilizes the special properties and methods found in the\nextended proxy (<a href=\"#!/api/NGNX.web.Proxy\" rel=\"NGNX.web.Proxy\" class=\"docClass\">NGNX.web.Proxy</a>, not <a href=\"#!/api/NGN.web.Proxy\" rel=\"NGN.web.Proxy\" class=\"docClass\">NGN.web.Proxy</a>). The only difference in\ncreating them is the optional <code>cache</code> attribute. Developers can use this to\nspecify a disk location where the cache file is saved. If this is not specified,\na cache file will automatically be created, relative to the node module.</p>\n\n<p><strong>2</strong> &amp; <strong>3</strong></p>\n\n<p>The proxy emits a couple of events. This is purely an optional step,\ntypically used to see <em>when</em> the proxy starts up and begins processing.\nThe <code>available</code> event is fired after the proxy has initialized and loaded\nthe configuration. In other words, it's fired when the proxy is available\nfor processing requests.</p>\n\n<p><strong>4</strong></p>\n\n<p>This code block makes the proxy start listening on any ports defined in the\nconfiguration.</p>\n\n<p><strong>5</strong></p>\n\n<p>Finally, the controller! The only required parameter is the proxy parameter.\nThe <code>proxy</code> parameter tells the proxy controller to communicate with the\nproxy defined in #1. The <code>autoStart</code> parameter is optional, and actually defaults\nto <code>true</code> if it is not set. In this case, the controller would start\nautomatically and immediately (i.e. don't need #6 &amp; #7).</p>\n\n<p><strong>6</strong></p>\n\n<p>The controller has a few events, and this code listens for the <code>ready</code> event.\nThis is inherited from NGN.web.API and is fired when the REST service is\nready to accept requests.</p>\n\n<p><strong>7</strong></p>\n\n<p>Start the controller. This only needs to be explicitly called when <code>autoStart</code>\nis <code>false</code>, otherwise the controller will start on it's own.</p>\n\n<h1>REST Controller Interface</h1>\n\n<p>The following documentation lists all of the endpoints provided by the\n<a href=\"#!/api/NGNX.web.ProxyController\" rel=\"NGNX.web.ProxyController\" class=\"docClass\">NGNX.web.ProxyController</a> class.</p>\n\n<p>The REST interface runs on port <code>3000</code> by default and generates\na base url of <code>/proxy</code>. In other words, the API in it's default\nstate would be available at <code>http://localhost:3000/proxy</code>. A <code>GET</code>\nrequest made to <code>http://localhost:3000/proxy/hosts</code> provides the\nhighest level call.</p>\n\n<p style=\"padding:4px;border-radius:6px;background:#f7f7c6;color:#6e3204;border:1px solid #705502;\">\n    <b>Remember:</b> Any POST or PUT with a JSON body requires the \"Content-Type\"\n    header to be set to \"application/json\". \n</p>\n\n\n<h2 id='proxycontroller-section-2'>List All</h2>\n\n<p>Retrieve all virtual hosts currently registered with the proxy.</p>\n\n<pre><code>GET /hosts\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): Contains a JSON array of all the virtual hosts (see next section for detail).</li>\n</ul>\n\n\n<h2 id='proxycontroller-section-3'>Virtual Hosts</h2>\n\n<p>Virtual Hosts are the core building block of the reverse proxy server.\nThey store hostnames, target servers, URL rewrite rules, and support\nhostname aliases. A proxy must have at least one virtual host in order\nto function.</p>\n\n<h3>Create Virtual Host</h3>\n\n<p>Create a new virtual host.</p>\n\n<pre><code>POST /host\n{\n    \"hostname\": 'localhost',                            // Primary Host\n    \"port\":     80,                                     // Primary listening port\n    \"alias\":    ['127.0.0.1'],                          // Known aliases\n    \"target\":   ['localhost:8383','localhost:8384'],    // Single server or array of load balanced servers.\n    \"rewrite\":  {\n                    \"GET\": [\n                        {'/api/v1/(.*)$':'api.cfm?v=1&amp;fn=$1'},\n                        {'/api/v2/(.*)$':'api.cfm?v=2&amp;fn=$1'}\n                    ],\n                    \"ALL\": [\n                        {'/api/v3/(.*)$':'api.cfm?v=3&amp;fn=$1'}\n                    ]\n                }\n}\n</code></pre>\n\n<p><strong>Respones</strong></p>\n\n<ul>\n<li><code>HTTP 201</code> (Created): The virtual host was created.</li>\n<li><code>HTTP 205</code> (Reset Content): The virtual host already exists.</li>\n<li><code>HTTP 400</code> (Bad Request): A problem with the POST body.</li>\n</ul>\n\n\n<h3>Retrieve Virtual Host</h3>\n\n<p>Retrieve the details of a specific virtual host.</p>\n\n<pre><code>GET /host/&lt;domain.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><em>Supports retrieval by alias.</em></p>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok):\n\n<pre><code>  {\n      hostname:   \"domain.com\",\n      port:       83,         \n      alias:      [\"127.0.0.1\"],\n      target:     [\"localhost:3000\"],\n      rules:      {\n                      GET: [\n                          {\"/api/v1/(.*)$\":\"api.php?v=1&amp;fn=$1\"},\n                          {\"/api/v2/(.*)$\":\"api.php?v=2&amp;fn=$1\"}\n                      ],\n                      ALL: [\n                          {\"/api/v3/(.*)$\":\"api.php?v=3&amp;fn=$1\"}\n                      ]\n                  }\n  }\n</code></pre></li>\n<li><code>HTTP 400</code> (Bad Request): A problem with the POST body.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host does not exist or cannot be found.</li>\n</ul>\n\n\n<h3>Remove Virtual Host</h3>\n\n<p>Remove a virtual host from the proxy.</p>\n\n<pre><code>DELETE /host/&lt;domain.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): The virtual host was removed.</li>\n<li><code>HTTP 400</code> (Bad Request): A problem with the POST body.</li>\n<li><code>HTTP 205</code> (Reset Content): The virtual host does not exist.</li>\n</ul>\n\n\n<h2 id='proxycontroller-section-4'>Aliases</h2>\n\n<p>Aliases are alternative domain names that map requests the same way the\nprimary host does. For example, <code>www.domain.com</code> may be an alias of <code>domain.com</code>,\nmeaning both domains would proxy requests to the same server.</p>\n\n<h3>Create Alias</h3>\n\n<p>Add an alias of a virtual hostname:</p>\n\n<pre><code>POST /alias/&lt;alias.com&gt;/of/&lt;domain.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 201</code> (Created): The virtual host was created.</li>\n<li><code>HTTP 205</code> (Reset Content): The virtual host already has the destination server.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host could not be found.</li>\n</ul>\n\n\n<h3>Remove Alias</h3>\n\n<p>Remove an alias of a virtual hostname:</p>\n\n<pre><code>DELETE /alias/&lt;alias.com&gt;/of/&lt;domain.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): The alias was removed.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host could not be found.</li>\n</ul>\n\n\n<h3>List Aliases</h3>\n\n<p>Retrieve a list of aliases associated with a virtual host.</p>\n\n<pre><code>GET /host/&lt;domain.com&gt;/&lt;port&gt;/aliases\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): Example: <code>['alias1.com','alias2.com']</code></li>\n<li><code>HTTP 404</code> (Missing): The virtual host could not be found.</li>\n</ul>\n\n\n<h2 id='proxycontroller-section-5'>Target/Destination Servers</h2>\n\n<p>Target servers are the servers where virtual host requests are proxied to.\nNGN provides simple round-robin load-balancing. As a result, a single\nvirtual host may have one or more target servers associated with it.</p>\n\n<h3>Add Target Server</h3>\n\n<p>Add a target server to the virtual host. This will be appended to the load\nbalancer queue.</p>\n\n<pre><code>POST /from/&lt;domain.com&gt;/&lt;port&gt;/to/&lt;server.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 201</code> (Created): The virtual host was created.</li>\n<li><code>HTTP 205</code> (Reset Content): The virtual host already has the destination server.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host could not be found.</li>\n</ul>\n\n\n<h3>List Target Servers</h3>\n\n<p>Retrieve a list of the destination servers the virtual host should route requests to.</p>\n\n<pre><code>GET /host/&lt;domain.com&gt;/&lt;port&gt;/targets\n</code></pre>\n\n<p><em>Supports retrieval by alias.</em></p>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code>:\n  [\n\n<pre><code>  'loadbalancer1.com',\n  'loadbalancer2.com',\n  'loadbalancer3.com'\n</code></pre>\n\n<p>  ]</p></li>\n<li><code>HTTP 404</code> (Missing): The virtual host could not be found.</li>\n</ul>\n\n\n<h3>Remove Target Server</h3>\n\n<p>Explicitly remove a specific target server from a virtual host.</p>\n\n<pre><code>DELETE /from/&lt;domain.com&gt;/&lt;port&gt;/to/&lt;server.com&gt;/&lt;port&gt;\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): Complete.</li>\n<li><code>HTTP 404</code> (Missing)`: The virtual host could not be found.</li>\n</ul>\n\n\n<h2 id='proxycontroller-section-6'>URL Rewrite Rules</h2>\n\n<p>URL rewrite rules are RegExp-based patterns and subsitutions that\nwill rewrite the destination URL. If the request URL matches\na rewrite rule, it will use substitution to manipulate the URL\naccordingly.</p>\n\n<h3>Create Rule</h3>\n\n<p>Create a rule for a specific virtual host.</p>\n\n<pre><code>POST /host/&lt;domain.com&gt;/&lt;port&gt;/rule/&lt;method&gt;\n{'/api/v1/(.*)$':'api.cfm?v=1&amp;fn=$1'}\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 201</code> (Created): The rules were created/appended to the virtual host rule set.</li>\n<li><code>HTTP 404</code> (Reset Content): The virtual host could not be found.</li>\n</ul>\n\n\n<h3>List Rules</h3>\n\n<p>Retrieve the rules associated with a virtual host.</p>\n\n<pre><code> GET /host/&lt;domain.com&gt;/&lt;port&gt;/rules\n</code></pre>\n\n<p><em>Supports retrieval by alias.</em></p>\n\n<p><strong>Response</strong>\n* <code>HTTP 200</code> (ok):</p>\n\n<pre><code> {\n    GET: [\n        {'/api/v1/(.*)$':'api.cfm?v=1&amp;fn=$1'},\n        {'/api/v2/(.*)$':'api.cfm?v=2&amp;fn=$1'}\n    ],\n    ALL: [\n        {'/api/v3/(.*)$':'api.cfm?v=3&amp;fn=$1'}\n    ]\n}\n</code></pre>\n\n<ul>\n<li><code>HTTP 404</code> (Missing): The virtual host does not exist or cannot be found.</li>\n</ul>\n\n\n<h3>Delete Rule</h3>\n\n<p>Delete a rule from a virtual host.</p>\n\n<pre><code>DELETE /host/&lt;domain.com&gt;/&lt;port&gt;/rule/&lt;method&gt;/&lt;index&gt;\n</code></pre>\n\n<p>Method will be a valid HTTP method, such as <code>POST</code>, <code>PUT</code>, <code>GET</code>, <code>DELETE</code>, etc.</p>\n\n<p>Index refers to the array index of the ruleset. Using the following rule set\nas an example, the 2<sup>nd</sup> <code>GET</code> rule is no longer required.</p>\n\n<pre><code>{\n    GET: [\n        {'/api/v1/(.*)$':'api.cfm?v=1&amp;fn=$1'},\n        {'/api/v2/(.*)$':'api.cfm?v=2&amp;fn=$1'}   // &lt;--- Remove This\n    ],\n    ALL: [\n        {'/api/v3/(.*)$':'api.cfm?v=3&amp;fn=$1'}\n    ]\n}\n</code></pre>\n\n<p>The method would be <code>GET</code> and the index would be <code>1</code>. Therefore, removing this\nrule would look like:</p>\n\n<pre><code>DELETE /host/&lt;domain.com&gt;/&lt;port&gt;/rule/GET/1\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): The rules are removed.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host does not exist or cannot be found.</li>\n</ul>\n\n\n<h3>Purge All Rules</h3>\n\n<p>All of the rules for a specific virtual host can be removed at once.\nBe careful with this, as it is irreversible.</p>\n\n<pre><code>DELETE /host/&lt;domain.com&gt;/&lt;port&gt;/rules\n</code></pre>\n\n<p><strong>Response</strong></p>\n\n<ul>\n<li><code>HTTP 200</code> (ok): The rules are removed.</li>\n<li><code>HTTP 404</code> (Missing): The virtual host does not exist or cannot be found.</li>\n</ul>\n\n","title":"Proxy Servers"});