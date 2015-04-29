server.route({
  method: 'GET',
  path: '/user/{user}',
  handler: {
    view: {
      template: 'user',
      context: {
        title: 'User',
        name: encodeURIComponent(request.params.user)
      }
    }
  }
});