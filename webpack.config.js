// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;
