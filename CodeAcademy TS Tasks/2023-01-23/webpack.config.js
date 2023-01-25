const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        open: true,
        compress: true,
        port: 3000,
      },
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
      
        loader: "ts-loader",
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
};