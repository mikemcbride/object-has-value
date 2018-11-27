const objectHasValue = require('./index.js')

// setup
const kitten = {
  name: 'Fluffy',
  type: 'cat',
  owner: 'Mike'
}

const puppy = {
  name: 'Fido',
  type: 'dog',
  owner: 'Mike'
}

// tests
test('returns true if the object has a value matching the search term', () => {
  expect(objectHasValue(kitten, 'cat')).toBe(true)
})

test('returns false if the object does not have a value matching the search term', () => {
  expect(objectHasValue(kitten, 'dog')).toBe(false)
})

test('handles case insensitive values', () => {
  expect(objectHasValue(kitten, 'fluffy')).toBe(true)
})

test('handles partial matches', () => {
  expect(objectHasValue(kitten, 'flu')).toBe(true)
})

test('filters arrays of objects', () => {
  let arr = [kitten, puppy]
  let filtered = arr.filter(it => objectHasValue(it, 'Mike'))
  expect(filtered.length).toBe(2)
})
