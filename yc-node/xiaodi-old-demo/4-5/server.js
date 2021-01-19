const http = require('http');
const routerModal = require('./router/index')

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    let postData = '';
    req.on('data', chunk => {
      postData += chunk;
    })
    req.on('end', () => {
      console.log(postData)
      resolve(JSON.parse(postData))
    })
  })
}

const server = http.createServer((req, res) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5501");
  res.writeHead(200, { 'content-type': 'application/json;charset=UTF-8' })
  getPostData(req).then((data) => {
    req.body = data
    let resultData = routerModal(req, res);
    if (resultData) {
      res.end(JSON.stringify(resultData))
    } else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.end('404 not found')
    }
  })

})

server.listen(3000, () => {
  console.log('监听3000端口')
})