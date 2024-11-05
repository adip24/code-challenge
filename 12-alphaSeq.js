// Code Challenge 5 November 2024
// By Codewars
// https://www.codewars.com/kata/5875b200d520904a04000003

const alphaSeq = (str) => {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .map((x) => x.toUpperCase() + x.repeat(x.charCodeAt(0) - 97))
    .join(',')
}

console.log(alphaSeq('NyffsGeyylB'))
