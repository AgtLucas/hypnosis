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