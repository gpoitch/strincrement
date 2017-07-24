const Strincrement = require('./')
const assert = require('assert')

/* global describe, it */

describe('Strincrement', () => {
  it('generates unique values', () => {
    const strincrement = Strincrement()
    const ids = []
    const count = 5000
    for (var i = 0; i < count; i++) {
      ids.push(strincrement())
    }

    assert.equal(ids.length, count)
    assert.equal(new Set(ids).size, count)
    assert.equal(ids[0], 'a')
    assert.equal(ids[52], 'aa')
    assert.equal(ids[500], 'iG')
  })

  it('can use a custom alphabet', () => {
    const strincrement = Strincrement('xyz')
    const ids = []
    const count = 5000
    for (var i = 0; i < count; i++) {
      ids.push(strincrement())
    }

    assert.equal(ids.length, count)
    assert.equal(new Set(ids).size, count)
    assert.equal(ids[0], 'x')
    assert.equal(ids[3], 'xx')
    assert.equal(ids[500], 'xyzxxz')
  })
})
