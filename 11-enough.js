// Code Challenge 5 November 2024
// By Codewars
// https://www.codewars.com/kata/5875b200d520904a04000003

const enough = (cap, on, wait) => {
  return on + wait > cap ? on + wait - cap : 0
}

console.log(enough(100, 60, 50))
