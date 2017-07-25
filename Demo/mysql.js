const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : 'root', // 数据库密码
  database : 'koa_demo'  // 选中数据库
})

// 执行sql脚本对数据库进行读写 
connection.query('SELECT * FROM user',  (error, results, fields) => {
  if (error) throw error
  // connected! 
  console.log(results)
});