// Code Challenge 7 November 2024
// By Codewars
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

const humanYearsCatYearsDogYears = (humanYears) => {
  if (humanYears == 1) return [humanYears, 15, 15]
  if (humanYears == 2) return [humanYears, 24, 24]

  const catYears = 24 + (humanYears - 2) * 4
  const dogYears = 24 + (humanYears - 2) * 5
  return [humanYears, catYears, dogYears]
}

console.log(humanYearsCatYearsDogYears(3))
