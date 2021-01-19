const url = require('url')
const {getUserList,addUser,delectUser,updateUser} = require('../controller/user')
function handleRequest(req,res) {
  let urlObj = url.parse(req.url,true);
  console.log(urlObj)
  if(urlObj.pathname === '/api/getUserList'&&req.method === 'GET'){
    let resultData = getUserList()
    console.log(resultData)
    return resultData;
  }
  if(urlObj.pathname === '/api/addUser'&&req.method === 'POST'){
    let resultData = addUser(req.body);
    return resultData;
  }
  if(urlObj.pathname === '/api/delectUser'&&req.method === 'POST'){
    let resultData = delectUser(urlObj.query.id);
    return resultData;
  }
  if(urlObj.pathname === '/api/updateUser'&&req.method === 'POST'){
    let resultData = updateUser(urlObj.query.id,req.body);
    return resultData;
  }
}

module.exports = handleRequest