// 用于拼接路径
var path = require('path');

module.exports = {
    // 指定项目入口
    entry: path.resolve(__dirname, './src/index.js'),
    // 对输出结果描述
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', 'css']
    },
    // 配置模块是永恒的加载器
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.jsx?$/,
            loaders: ['babel-loader']
        }]
    },
}