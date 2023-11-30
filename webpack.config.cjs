const path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'src/scripts'),
        filename: 'main.js'
    },
    mode: 'development',
    node: {
        global: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
};
