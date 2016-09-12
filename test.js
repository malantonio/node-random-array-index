var assert = require('assert')
var randomIndex = require('./')
var arr = ['one', 'two', 'three']

for (var i = 0; i < 10000; i++) {
	var idx = randomIndex(arr)
	assert.ok(arr[idx])
	assert.ok(idx >= 0)
	assert.ok(idx < arr.length)
}

assert.throws(randomIndex)
assert.throws(function () { randomIndex({}) })
assert.throws(function () { randomIndex(1234) })

var arrlike = {0: 'one', 1: 'two', 2: 'three', length: 3}

for (var j = 0; j < 10000; j++) {
	var idx = randomIndex(arrlike)
	assert.ok(arrlike[idx])
	assert.ok(idx >= 0)
	assert.ok(idx < arrlike.length)
}
