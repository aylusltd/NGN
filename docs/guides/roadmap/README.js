Ext.data.JsonP.roadmap({"guide":"<h1>NGN Roadmap</h1>\n\n<h2>Unknown Release Version</h2>\n\n<p>Add the following base classes:</p>\n\n<p><strong>Core Server Types</strong></p>\n\n<ul>\n<li>NGN.core.TcpServer</li>\n<li>NGN.core.DnsServer</li>\n<li>NGN.core.FtpServer</li>\n<li>NGN.core.TelnetServer</li>\n<li>NGN.core.SmtpServer</li>\n<li>NGN.core.Cluster (mixin?)</li>\n</ul>\n\n\n<p><strong>Application Helpers</strong></p>\n\n<ul>\n<li>NGN.app.EventBus</li>\n</ul>\n\n\n<p><strong>Simplified Server-2-Server Networking</strong></p>\n\n<ul>\n<li>NGN.net.Connection</li>\n</ul>\n\n\n<p><strong>Simplified Servers/Clients</strong></p>\n\n<ul>\n<li>NGN.ftp.Server</li>\n<li>NGN.ftp.Client</li>\n<li>NGN.dns.Server</li>\n<li><a href=\"#!/api/NGN.web.Proxy\" rel=\"NGN.web.Proxy\" class=\"docClass\">NGN.web.Proxy</a></li>\n<li><a href=\"#!/api/NGN.web.Socket\" rel=\"NGN.web.Socket\" class=\"docClass\">NGN.web.Socket</a></li>\n</ul>\n\n\n<p><strong>Web Authentication Strategies</strong></p>\n\n<ul>\n<li><a href=\"#!/api/NGN.web.auth.Strategy\" rel=\"NGN.web.auth.Strategy\" class=\"docClass\">NGN.web.auth.Strategy</a></li>\n<li>NGN.web.auth.OAuth</li>\n<li>NGN.web.auth.Facebook</li>\n<li>NGN.web.auth.Twitter</li>\n<li>NGN.web.auth.LinkedIn</li>\n<li>NGN.web.auth.Github</li>\n<li>NGN.web.auth.Foursquare</li>\n<li>NGN.web.auth.Dwolla</li>\n<li>NGN.web.auth.Group</li>\n<li>NGN.web.auth.Role</li>\n<li>NGN.web.auth.Permission</li>\n</ul>\n\n\n<p><strong>New Datasource Connectors</strong></p>\n\n<ul>\n<li>NGN.datasource.SQL (generic RDBMS base connection)</li>\n<li>NGN.datasource.MySql</li>\n<li>NGN.datasource.PostgreSql</li>\n<li>NGN.datasource.Oracle</li>\n<li>NGN.datasource.SqlServer</li>\n<li>NGN.datasource.Azure</li>\n<li>NGN.datasource.CouchDB</li>\n<li>NGN.datasource.Neo4j</li>\n<li>NGN.datasource.Cassandra</li>\n<li>NGN.datasource.Hadoop</li>\n</ul>\n\n\n<p><em>Optional Generic Connectors?</em></p>\n\n<ul>\n<li>NGN.datasource.Document (NoSQL)</li>\n<li>NGN.datasource.Graph (NoSQL)</li>\n<li>NGN.datasource.KeyValue (NoSQL)</li>\n<li>NGN.datasource.XML</li>\n<li>NGN.datasource.JSON</li>\n<li>NGN.datasource.Memory (Object store?)</li>\n</ul>\n\n\n<h3>Common Extension Library</h3>\n\n<ul>\n<li><a href=\"#!/api/NGNX.Person\" rel=\"NGNX.Person\" class=\"docClass\">NGNX.Person</a></li>\n<li>NGNX.Group</li>\n<li>NGNX.Account</li>\n<li>NGNX.Actor</li>\n<li>NGNX.Device</li>\n<li>NGNX.Template</li>\n<li>NGNX.Organization</li>\n<li>NGNX.Email</li>\n<li>NGNX.Address (street address)</li>\n<li>NGNX.PhoneNumber</li>\n<li>NGNX.Location (generic geographic location)</li>\n<li>NGNX.Date</li>\n</ul>\n\n\n<p><em>Potential Geographic Library</em></p>\n\n<ul>\n<li>NGNX.Country</li>\n<li>NGNX.Region</li>\n<li>NGNX.City</li>\n<li>NGNX.PostalCode</li>\n</ul>\n\n\n<p><em>Service Wrappers?</em>\n* NGNX.service.Stripe\n* NGNX.service.Facebook\n* NGNX.service.Twitter\n* NGNX.service.LinkedIn\n* NGNX.service.Foursquare\n* NGNX.service.Dwolla\n* NGNX.service.Sendgrid\n* NGNX.service.Loggly\n* NGNX.service.Bitly\n* NGNX.service.Github\n* NGNX.service.Bitbucket\n...</p>\n\n<h1>CLI Commands</h1>\n\n<p><code>ngn --extend ngn</code> Create a stub for a new NGN class.\n<code>ngn --extend ngnx</code> Create a stub for a new NGNX class.\n<code>ngn --extend api</code> Create a stubb for a new extension API class.\n<code>ngn --extend api --uml /path/to/file</code> Create a stub library for a new API, based on a UML file.\n<code>ngn --create template</code> Create a new NGN project using a template.</p>\n","title":"Roadmap"});