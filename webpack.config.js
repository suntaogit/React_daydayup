// 参考的这篇文章 ，挺好的 http://www.w2bc.com/Article/50764
var webpack = require('webpack');
// plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //页面入口文件配置
    entry:{
        index: './WebClient/src/index.js'
    },
    //入口文件输出配置
    output:{
        path: './WebClient/src/dist/js/page',
        filename: '[name].js'
    },
    //module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理
    module:{
        //加载器配置
        loaders:[
            {test: /\.css$/,loader:'style-loader!css-loader'},
            {test:/\.js$/,loader:'jsx-loade?harmony'},
            {test:/\.scss/,loader:'style!css!sass?sourceMap'},
            {test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'}
        ]
    },
    //其他解决方案配置
    resolve:{
        root: 'g://github/suntaogit', //绝对路径
        extensions:['','.js','.json','.scss'],
        alias:{
            AppStore: 'js/stores/AppStores.js',
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }

    }
};