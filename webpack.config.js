const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
        ],
    },
}