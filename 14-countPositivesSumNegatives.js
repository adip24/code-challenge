// Code Challenge 6 November 2024
// By Codewars
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

const countPositivesSumNegatives = (input) => {
  if (!input || input.length == 0) return []
  var count = 0
  var sum = 0
  input.forEach((element) => {
    if (element > 0) count++
    if (element < 0) sum += element
  })
  return [count, sum]
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
