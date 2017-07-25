const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=> {
    ctx.body = 'hello koa2'
})

app.listen(7777);
console.log('[demo] start is starting at port 7777');