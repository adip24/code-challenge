// Code Challenge 3 November 2024
// By Codewars
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

const correctMistakCharacter = (string) => {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
  //   const obj = { 5: 'S', 0: 'O', 1: 'I' }
  //   for (const x in obj) {
  //     string = string.replace(new RegExp(x, 'g'), obj[x])
  //   }
  //   return string
}

console.log(correctMistakCharacter('L0ND0N'))
