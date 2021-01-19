function add(a,b){
  console.log(a+b)
}

function decrease(a,b){
  console.log(a-b)
}

// var a = 1;
global.a = 2
// console.log(a)
// console.log(global.a)

module.exports = {
  add,
  decrease
}