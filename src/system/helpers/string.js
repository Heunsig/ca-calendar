export function attachSlashBeforeNonWord (str) {
  let result = []
  for (let w of str) {
    if (/\W/.test(w)) {
      result.push('\\' + w)
    } else {
      result.push(w)
    }
  }

  return result.join('')
}

export function convertDateFormatToFormatChecker (format) {
  let result = attachSlashBeforeNonWord(format)
  return '\^'+result.replace(/m|d|y/g, '\\d') + '\$'
}

export function isMatched (str, pattern) {

  return new RegExp(convertDateFormatToFormatChecker(pattern), 'g').test(str)
}