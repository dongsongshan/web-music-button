const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  // watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "web-music-button.js",
    chunkFilename: '[name].js',
    libraryTarget: 'umd', // 兼容多种模块格式
    clean: true,
    assetModuleFilename: '[name][ext][query]'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'web-music-button.css'
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      options: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    },{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
    },{
      test: /\.(jpg|png)$/i,
      type: 'asset/resource',
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  // devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};