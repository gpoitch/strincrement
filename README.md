# Strincrement

String incrementing id generator.  Given an alphabet, generates unique sequential ids.  

Use cases:
- Non-numeric auto-incrementing ids
- Spreadsheet column naming
- CSS classname minification

## Usage

```js
import Strincrement from 'strincrement'

const generateId = Strincrement()
console.log(generateId()) // 'a'
console.log(generateId()) // 'b'
console.log(generateId()) // 'c'
// ...
console.log(generateId()) // 'aa'
console.log(generateId()) // 'ab'
```

### Supply your own alphabet

```js
const generateId = Strincrement('XYZ')
console.log(generateId()) // 'X'
console.log(generateId()) // 'Y'
console.log(generateId()) // 'Z'
console.log(generateId()) // 'XX'
console.log(generateId()) // 'XY'
```
