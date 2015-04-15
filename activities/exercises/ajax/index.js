var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
	host: 'localhost', 
	port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/tests/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});
server.route({
    method: 'GET',
    path:'/tests/cors',
	config: {
		cors: true
	},
    handler: function (request, reply) {
       reply('CORS works!');
    }
});
server.route({
    method: 'GET',
    path:'/tests/json',
    handler: function (request, reply) {
       reply({name: 'mono', rand: Math.random() * 1000});
    }
});
server.route({
    method: 'POST',
    path:'/tests/echo',
    handler: function (request, reply) {
       reply(request.payload);
    }
});
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

// Start the server
server.start();