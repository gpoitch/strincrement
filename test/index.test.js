const Strincrement = require('../')
const assert = require('assert')

describe('Strincrement', () => {
  it('generates unique values', () => {
    const strincrement = Strincrement()
    const ids = []
    const count = 5000
    for (let i = 0; i < count; i++) {
      ids.push(strincrement())
    }

    assert.strictEqual(ids.length, count)
    assert.strictEqual(new Set(ids).size, count)
    assert.strictEqual(ids[0], 'a')
    assert.strictEqual(ids[52], 'aa')
    assert.strictEqual(ids[500], 'iG')
  })

  it('can use a custom alphabet', () => {
    const strincrement = Strincrement('xyz')
    const ids = []
    const count = 5000
    for (let i = 0; i < count; i++) {
      ids.push(strincrement())
    }

    assert.strictEqual(ids.length, count)
    assert.strictEqual(new Set(ids).size, count)
    assert.strictEqual(ids[0], 'x')
    assert.strictEqual(ids[3], 'xx')
    assert.strictEqual(ids[500], 'xyzxxz')
  })
})
