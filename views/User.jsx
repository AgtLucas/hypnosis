var React = require('react');
var DefaultLayout = require('./layouts/Default.jsx');

var User = React.createClass({
  render: function () {
    return (
      <DefaultLayout>
        <h1>Hello, {this.props.name}</h1>
      </DefaultLayout>
    );
  }
});

module.exports = User;