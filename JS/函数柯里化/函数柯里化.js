/* 
  函数柯里化
    把接受多个参数的函数，改造成接受一个单一参数（最初函数的第一个参数）的函数，
    并且返回接受余下的参数而且返回结果的新函数的技术 
 */

// 将接受多个参数的函数，改成接受单一参数的函数

// -----------原函数--------------

// function sum(a, b) {
//   return a + b
// }

// sum(1, 2)

// -----------改造后--------------

function sum(a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(12)(2))