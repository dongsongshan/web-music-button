const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  // watch: true,
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "web-music-button.js",
    chunkFilename: '[name].js',
    libraryTarget: 'module',
    module: true,
    clean: true,
    assetModuleFilename: '[name][ext][query]'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'web-music-button.css'
    })
  ],
  module: {
    rules: [
    {
      test: /\.js/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          targets: "defaults",
          presets: [
            ['@babel/preset-env']
          ]
          // ,
          // plugins:[
          //   '@babel/plugin-transform-modules-commonjs'
          // ]
        }
      }
    },
    {
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
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};