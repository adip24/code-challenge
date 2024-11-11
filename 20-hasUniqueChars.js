// Code Challenge 10 November 2024
// By Codewars
// https://www.codewars.com/kata/553e8b195b853c6db4000048/

const hasUniqueChars = (str) => {
  //   const array = Array.from(str, (x) => x.charCodeAt(0))
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index]
  //     var total = array.filter((value) => value == element)
  //     if (total.length > 1) {
  //       return false
  //     }
  //   }
  //   return true
  return new Set(str).size === str.length
}

console.log(hasUniqueChars('a+-'))
