// Code Challenge 4 November 2024
// By Codewars
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

const powersOfTwo = (n) => {
  var array = []
  for (let index = 0; index <= n; index++) {
    array.push(Math.pow(2, index))
  }
  return array
}

console.log(powersOfTwo(3))
