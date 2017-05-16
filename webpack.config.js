/**
 * Created by cqx on 2017/5/16.
 */
//webpack.config.js
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

    entry: __dirname + "/src/app/main.js",   //入口
    output: {
        path: __dirname + "/src/public", //打包好后存放的目录
        filename: "bundle.js"   //打包好后的文件名
    },

    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("我是无敌的？？？对啊擦屁股")//在这个数组中new一个就可以了
    ],

    devServer: {
        contentBase: "./src/main/resources/public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}