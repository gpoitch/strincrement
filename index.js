const ALPHABET_DEFAULT = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

module.exports = function Strincrement(alphabet) {
  const chars = (alphabet || ALPHABET_DEFAULT).split('')
  const charLength = chars.length
  const toInt = Math.floor
  let count = 0

  return function () {
    let string = ''
    let cycle = ++count
    let pos

    while (cycle > 0) {
      pos = (cycle - 1) % charLength
      cycle = toInt((cycle - pos) / charLength)
      string = chars[pos] + string
    }

    return string
  }
}
