module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '',
    frameworks: ['mocha','riot'],
    files: [
      'node_modules/power-assert/build/power-assert.js',
      'node_modules/sinon/pkg/sinon.js',
      'src/**/*.tag',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack'],
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
          }
      },
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    failOnEmptyTestSuite: false,
    // singleRun: true
  })
}
