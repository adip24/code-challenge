// Code Challenge 8 November 2024
// By Codewars
// https://www.codewars.com/kata/57fb79784e2d0639c9000066/

const sortItOut = (array) => [
  ...array.sort((a, b) => a - b).filter((element) => Math.floor(element) % 2.0),
  ...array.sort((a, b) => b - a).filter((element) => Math.floor(element) % 2.0 == 0)
]

console.log(sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67]))
