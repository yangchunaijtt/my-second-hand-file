const router = require('koa-router')();

// 引入子模版

const focus = require('./admin/focus.js');
const newscate = require('./admin/newscate.js');
const user = require('./admin/user.js');

router.use('/focus',focus);

router.use('/newscate',newscate);

router.use('/user',user);


module.exports = router.routes();