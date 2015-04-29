var context = {
  title: 'React + hapi',
  name: 'React + hapi'
};

module.exports = {
  method: 'GET',
  path: '/',
  handler: {
    view: {
      template: 'home',
      context: context
    }
  }
};