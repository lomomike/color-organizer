var webpack = require("webpack")
var path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.noDeprecation = true

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
       
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    mode: 'production'
}
