module.exports = {
  method: 'GET',
  path: '/user/{user}',
  handler: function (request, reply) {
    reply.view('user', {
      title: 'User',
      name: encodeURIComponent(request.params.user)
    });
  }
};