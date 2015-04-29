var Hapi = require('hapi');
var routes = require('./routes/index');

var server = new Hapi.Server();
server.connection({port: 4000});

server.views({
  engines: {
    jsx: require('hapi-react-views')
  },
  compileOptions: {},
  path: __dirname + '/views'
});

server.route(routes);

server.start();