// Code Challenge 6 November 2024
// By Codewars
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
  var n = 0
  const growthRate = percent / 100
  while (p0 < p) {
    p0 = Math.trunc(p0 + growthRate * p0 + aug)
    n++
  }
  return n
}

console.log(nbYear(1000, 2.0, 50, 1214))
