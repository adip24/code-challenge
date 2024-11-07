// Code Challenge 7 November 2024
// By Codewars
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

const isPalindrome = (x) => {
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('hello'))
