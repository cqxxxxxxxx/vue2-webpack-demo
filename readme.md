### webpack
```apple js
// 安装Webpack在项目里（非全局）
npm install --save-dev webpack

//全局安装
npm install webpack -g  

webpack -h  //查看帮助命令

在项目目录下执行 webpack  就会根据你的 webpack.config.js 来进行分析你的项目结构并将其打包
当然也可以通过 webpack app/main.js(入口文件) public/bundle.js(打包好后生成的文件) 来打包。 
```

#### loaders
```
loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个
```

#### plugins
```
插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
常用的插件有： 
HtmlWebpackPlugin   依据一个简单的模板，帮你生成最终的Html5文件，这个文件中自动引用了你打包后的JS文件
Hot Module Replacement  自动刷新实时预览修改后的效果
UglifyJsPlugin  压缩JS
ExtractTextPlugin   分离CSS和JS文件
```

#### Babel
一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到以下目的：
1. 下一代的JavaScript标准（ES6，ES7），这些标准目前并未被当前的浏览器完全的支持
2. 使用基于JavaScript进行了拓展的语言，比如React的JSX

```apple js
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
babel 的配置可能会比较繁杂，所以单独建个文件 `.babelrc` 来进行单独配置，webpack会自动调用其中的配置选项。

