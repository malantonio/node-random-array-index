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
assert.throws(function () { randomIndex('nope') })
assert.throws(function () { randomIndex(1234) })
