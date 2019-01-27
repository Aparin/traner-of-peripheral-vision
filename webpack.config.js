module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};