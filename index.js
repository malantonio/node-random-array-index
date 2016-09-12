'use strict'

module.exports = function randomArrayIndex (array) {
  if (!Array.isArray(array)) {
    throw TypeError('Expected argument to be an array')
  }

  return Math.floor(Math.random() * array.length)
}
