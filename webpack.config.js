const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "myReports.html",
      filename: "myReports.html",
    }),
    new HtmlWebpackPlugin({
      template: "inviteYourTeam.html",
      filename: "inviteYourTeam.html",
    }),
    new HtmlWebpackPlugin({
      template: "fillOutReport.html",
      filename: "fillOutReport.html",
    }),
      template: "teamReports.html", 
      filename: "teamReports.html"
    }),
    new HtmlWebpackPlugin({
      template: "reportHistory.html", 
      filename: "reportHistory.html"
    }),
    new HtmlWebpackPlugin({
      template: "editCorpInfo.html", 
      filename: "editCorpInfo.html"
    }),
    new HtmlWebpackPlugin({
      template: "teamMembers.html",
      filename: "teamMembers.html"
    }),
    new HtmlWebpackPlugin({
      template: "editUserInfo.html",
      filename: "editUserInfo.html"
    })
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
