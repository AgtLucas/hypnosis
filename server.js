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

var context = {
  title: 'React + hapi',
  name: 'React + hapi'
};

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: {
      template: 'home',
      context: context
    }
  }
});

server.start();