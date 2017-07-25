# React_daydayup

2017/07/25
# 1.搭建koa框架
  koa快速开始：https://github.com/ChenShenhai/koa2-note/blob/master/note/start/quick.md  
  --npm init 初始化package.json  
  --npm install koa --save 安装koa2  
  --本示例node的版本必须在7.6以上(async/await)，当前node版本为8.1.2，如果报错listen EADDRINUSE :::3000，修改端口号即可  
    
  基本实现这个功能：https://github.com/douglasvegas/fanpianAdmin    
  
#2.安装mysql模块  
  --npm install mysql --save  
  --node mysql 查看demo  

#3.前端文件夹是WebClient  
 --npm install react redux react-redux react-router --save 安装react全家桶  
 --npm install webpack --save 打包工具  
 --npm install antd --save 蚂蚁金服前端组件  
 --因为有浏览器不支持ES6语法，一定要用到babel转换器,  
    --- 第一步 .babelrc是Babel的配置文件，放在项目的根目录下，使用babel的第一步就是配置这个文件  

        #ES2015转码规则  
        npm install --save-dev babel-preset-es2015  

        #react转码规则  
        npm install --save-dev babel-preset-react  

        #ES7不同阶段语法提案的转码规则（共4个阶段），选择装一个  
        npm install --save-dev babel-preset-stage-0  
        npm install --save-dev babel-preset-stage-1  
        npm install --save-dev babel-preset-stage-2  
        npm install --save-dev babel-preset-stage-3  

        {    
          "presets": [  
              "es2015",  
              "react",  
              "stage-2"  
          ],   //presets字段设定转码规则
          "plugins": []  
        }   
    --- 第二步，


  # webpack 参考这篇文章 https://github.com/ruanyf/webpack-demos#demo01-entry-file-source