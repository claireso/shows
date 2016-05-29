var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname+ '/dist',
        filename: "app.js"
    },
    module: {
        resolve: {
            extensions: ['', '.js', '.styl']
        },
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
};
