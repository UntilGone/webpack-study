const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts)|(js)$/, // 只处理ts js文件
        use: [
          {
            loader: 'babel-loader', // 使用babel-loader
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'], // babel配置  常见的有@babel/preset-env @babel/preset-typescript babel-preset-react等
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // 声明自动解析 当import './a' 会按顺序找a.ts a.js
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts', '.js'],
    }),
  ],
};
