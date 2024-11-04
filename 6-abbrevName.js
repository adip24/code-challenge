// Code Challenge 4 November 2024
// By Codewars
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) => {
  return name
    .split(' ')
    .map((arr) => arr[0].toUpperCase())
    .join('.')
}

console.log(abbrevName('Sam Harris'))
