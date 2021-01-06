const koa = require('koa'),
  router = require("koa-router")(),
  render = require('koa-art-template'),
  path = require('path');
// 引入子模块
const admin = require('./routes/admin.js');
const api  = require('./routes/api.js');
const index =require('./routes/index.js');

const app = new koa();

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

router.use(index);

router.use('/',index);

router.use('/api',api);

router.use('/admin',admin);

//启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(8002);

console.log('server in localhost://8002');