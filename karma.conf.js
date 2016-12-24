module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '',
    frameworks: ['mocha','riot'],
    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        'node_modules/power-assert/build/power-assert.js',
        'node_modules/sinon/pkg/sinon.js',
        'src/**/*.tag',
        'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
      '**/*.tag': ['riot']
    },
      webpack: {
          devtool: 'inline-source-map',
          module: {
              loaders: [
                  {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      loader: 'babel-loader',
                      query: {
                          presets: ['es2015'],
                          plugins: ['babel-plugin-espower']
                      }
                  }
              ]
          },
          // 指定したパスを起点としたモジュールを読み込めるようにする
          resolve: {
              root: [
                  `${__dirname}/src`,
              ]
          }
      },
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    failOnEmptyTestSuite: false,
    // singleRun: true
  })
}
