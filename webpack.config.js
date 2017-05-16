/**
 * Created by cqx on 2017/5/16.
 */

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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            }
        ]
    },

    devServer: {
        contentBase: "./src/main/resources/public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}