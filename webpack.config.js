const path = require('path');

module.exports = {
  entry: {
    main: "./client/client.js",
    // test: "mocha!./test/index.js"
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', 'css']
  }
}
