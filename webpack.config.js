const path = require("path");

module.exports = {
  mode: "none",
  entry: "./edo-calendar.lit",
  output: {
    path: path.resolve(".", "dist"),
    filename: "edo-calendar.bundle.js"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.lit$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: ["safari 11"]
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: "lit-loader"
          }
        ]
      }
    ]
  }
};
