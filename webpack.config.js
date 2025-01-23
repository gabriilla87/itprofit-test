const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"})
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'), // Указываем папку, где находится index.html
        },
        port: 8080, // Порт, на котором работает сервер
        open: true, // Автоматически открывать браузер
        hot: true, // Горячая перезагрузка
    },
    mode: "production",
};
