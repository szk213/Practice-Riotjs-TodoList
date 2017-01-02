var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        'index': './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js'
    },
    devServer: {
        // contentBase: 'dist',
        port: 3000,
        hot: true,
        inline: true
    },
    module: {
        preLoaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: {
                    type: 'babel'
                }
            }
        ],
        loaders: [
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015-riot']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag', '.scss'],
        root: [
            `${__dirname}/src`,
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ]
};