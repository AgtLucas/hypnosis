var React = require('react');
var DefaultLayout = require('./layouts/Default.jsx');

var HomeView = React.createClass({
  render: function () {
    return (
      <DefaultLayout>
        <h1>Hello, {this.props.name}</h1>
      </DefaultLayout>
    );
  }
});

module.exports = HomeView;