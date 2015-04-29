module.exports = {
  method: 'GET',
  path: '/user/{user}',
  handler: {
    view: {
      template: 'user',
      context: {
        title: 'User',
        user: encodeURIComponent(request.params.user)
      }
    }
  }
};