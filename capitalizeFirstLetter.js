function capitalizeFirstLetter(string) {
  const arrFromStr = string.split ('')
  arrFromStr[0] = arrFromStr[0].toUpperCase ()
  return arrFromStr.join ('')
}

console.log (capitalizeFirstLetter('hello'))
