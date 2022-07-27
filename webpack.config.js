const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      // 使用ts loader处理ts
      // 相比较babel  ts-loader会在编译过程中进行类型校验 代价是更长的编译时间
      // index.ts中有类型错误  如果使用这个配置就会编译报错 用时1473ms
      // {
      //   test: /\.ts$/, // 处理ts文件
      //   use: 'ts-loader',
      // },
      // 用babel则不会报错 babel只做代码转换 用时692ms
      {
        test: /\.(ts)|(js)$/, // 只处理ts js文件
        use: [
          {
            loader: 'babel-loader', // 使用babel-loader
            options: {
              presets: ['@babel/preset-typescript'], // babel配置  常见的有@babel/preset-env @babel/preset-typescript babel-preset-react等
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // 声明自动解析 当import './a' 会按顺序找a.ts a.js
  },
};
