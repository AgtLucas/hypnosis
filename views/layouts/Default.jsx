var React = require('react');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{this.props.title}</title>
      </head>
      <body>
      {this.props.children}
      </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;