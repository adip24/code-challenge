const remove = (string) => {
  //   return string[string.length - 1] == '!' ? string.slice(0, -1) : string
  return string.replace(/!$/, '')
}

console.log(remove('Hi!a!s!'))
