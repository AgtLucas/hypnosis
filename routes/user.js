module.exports = {
  method: 'GET',
  path: '/user/{user}',
  handler: function (request, reply) {
    var user = encodeURIComponent(request.params.user);
    reply.view('user', {
      title: 'User',
      name: user
    });
  }
};