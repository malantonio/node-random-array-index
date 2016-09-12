'use strict'
var isArrayLike = require('is-array-like')

module.exports = function randomArrayIndex (arr) {
  if (!isArrayLike(arr)) {
    throw TypeError('Expected argument to be an array or array-like')
  }

  return Math.floor(Math.random() * arr.length)
}

