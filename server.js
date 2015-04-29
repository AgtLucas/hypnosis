var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 4000});

server.views({
  engines: {
    jsx: require('hapi-react-views')
  },
  compileOptions: {},
  path: __dirname + '/views'
});

server.start();