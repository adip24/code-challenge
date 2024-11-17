// Code Challenge 18 November 2024
// By Codewars
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a

const between = (a, b) => {
  return Array.from({ length: b - a + 1 }, (v, k) => k + a)
}

console.log(between(-2, 4))
