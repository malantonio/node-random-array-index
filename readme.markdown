random-array-index
==================

```
npm i --save random-array-index
```

usage
-----

```javascript
var randomArrayIndex = require('random-array-index')
var things = ['cat', 'dog', 'cactus', 'dinosaur', 'sloth', 'water bottle']
var idx = randomArrayIndex(things)

console.log(idx, things[idx])
```

api
---

### randomArrayIndex(array)

Returns an integer from `0` to `array.length - 1`

license
-------

MIT
