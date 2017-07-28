// 参考的这篇文章 ，挺好的 http://www.w2bc.com/Article/50764
var webpack = require('webpack');
// plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //页面入口文件配置
    entry: './WebClient/src/index.js',
    //入口文件输出配置
    output:{
        path: __dirname + './WebClient/dist',
        filename: 'bundle.js'
    },
    //module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理
    module:{
        //加载器配置  //所有的加载器都需要通过npm 来加载，例如：npm install --save-dev url-loader
        rules:[
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/,exclude: /node_modules/,loader:'style-loader!css-loader'},
            //.js 文件使用 jsx-loader来编译处理
            {test:/\.js$/,exclude: /node_modules/,loader:'jsx-loader?harmony'},
            //.scss 文件使用 style-loader,css-loader,sass-loader来编译处理 //-loader是可以不写的，多个loader之间用“!”连接起来
            {test:/\.scss/,exclude: /node_modules/,loader:'style!css!sass?sourceMap'},
            //图片文件使用url-loader来处理，小于8KB的直接转为base64
            {test:/\.(png|jpg)$/,exclude: /node_modules/,loader:'url-loader?limit=8192'}
        ]
    },
    //其他解决方案配置
    resolve:{
        //查找module的话从这里开始查找
        //root: 'g://github/suntaogit', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['.js','.json','.scss'],
        //模块别名定义，方便后续直接引用别名，无需多写长的地址
        // alias:{
        //     AppStore: 'js/stores/AppStores.js', //后续直接 require('AppStore')即可
        //     ActionType: 'js/actions/ActionType.js',
        //     AppAction: 'js/actions/AppAction.js'
        // }

    }
};