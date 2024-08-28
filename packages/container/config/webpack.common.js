const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      //The goal is to tell webpack to process some different files as we start to import them into our project.
      //Babel going to be incharge of processing all our code from ED 2015, 16, 17, 18, 19, 20 and so on and turn it into regular ES5 code that can be easily executed inside of a typical browser
      {
        // this says that whenever we import in a file that ends with an extension of either mjs or just js, we want it to be processed by babel
        test: /\.m?js$/,
        // Do not try to run babel on any file in node_modules directory
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // preset-react - Babel gonna process all the different jsx tags that we add into our app.
            // preset-env - is going to transform our code in a variety of different wasys taking all kind of ES 2015...20 and so on to convert it down to ES5
            // preset-transform-runtime then finally plugin to transform runtime to add in a little bit of additional code just to enable some different feature for our project inside the browser.
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
