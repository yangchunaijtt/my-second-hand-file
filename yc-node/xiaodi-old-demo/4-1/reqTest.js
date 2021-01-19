const url = require('url');
const http = require('http');

// console.log(url.parse('https://api.xdclass.net/pub/api/v1/web/product/find_list_by_type?type=2',true,true))

const server = http.createServer((req, res) => {
  console.log(2)
  if (req.method === 'GET') {
    let urlObj = url.parse(req.url, true);
    res.end(JSON.stringify(urlObj.query))
  } else if (req.method === 'POST') {
    let postData = '';
    req.on('data', chunk => {
      postData += chunk;
    })
    req.on('end', () => {
      console.log(postData)
    })
    res.end(JSON.stringify({
      data: '请求成功',
      code: 0
    }))
  }

})

server.listen(3000, () => {
  console.log('监听3000端口')
})