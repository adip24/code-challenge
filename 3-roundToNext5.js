// Code Challenge 3 November 2024
// By Codewars
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

const roundToNext5 = (n) => {
  return Math.ceil(n / 5) * 5
}

// function roundToNext5(n) {
//   while (n % 5 !== 0) n++
//   return n
// }

console.log(roundToNext5(-10))
