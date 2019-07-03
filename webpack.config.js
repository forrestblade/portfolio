const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jp2|jpg|gif|jpeg)$/,
        loaders: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '65-75'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Forrest Blade | Fullstack Engineer',
      favicon: './public/favicon.png'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
