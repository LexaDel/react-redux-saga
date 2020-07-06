require('babel-polyfill')
const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.jsx']
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.min.js'
  },
  module:{
      rules:[   //загрузчик для jsx
          {
              test: /\.jsx?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
              }
          }
      ]
  }
};