// Code Challenge 3 November 2024
// By Codewars
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

const howMuchILoveYou = (nbPetals) => {
  const array = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return array[(nbPetals - 1) % array.length]
}

console.log(howMuchILoveYou(8))
