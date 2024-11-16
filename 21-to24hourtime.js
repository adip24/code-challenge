// Code Challenge 16 November 2024
// By Codewars
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a

// const to24hourtime = (hour, minute, period) => {
//   if (period == 'pm') {
//     hour += 12
//     hour = hour != 24 ? hour : '12'
//   } else {
//     hour = hour != 12 ? hour : '00'
//   }

//   hour = hour.toString().length == 1 ? `0${hour}` : hour
//   minute = minute.toString().length == 1 ? `0${minute}` : minute
//   return `${hour}${minute}`
// }

const to24hourtime = (hour, minute, period) => {
  hour = period === 'pm' ? (hour % 12) + 12 : hour % 12
  return `${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`
}

console.log(to24hourtime(12, 0, 'am'))
