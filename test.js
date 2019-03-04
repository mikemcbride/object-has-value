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


const mike = {
  name: 'Mike',
  phone: [
    {
      number: '555-444-4444',
      type: 'cell'
    },
    {
      number: '555-333-3333',
      type: 'work'
    }
  ],
  manager: {
    name: 'Joe',
    phone: [
      {
        number: '555-555-5555',
        type: 'cell'
      },
      {
        number: '555-666-6666',
        type: 'work'
      }
    ]
  }
}

const dan = {
  name: 'Dan',
  phone: [
    {
      number: '555-888-8888',
      type: 'cell'
    },
    {
      number: '555-999-9999',
      type: 'work'
    }
  ],
  manager: {
    name: 'Joe',
    phone: [
      {
        number: '555-555-5555',
        type: 'cell'
      },
      {
        number: '555-666-6666',
        type: 'work'
      }
    ]
  }
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

test('recursively filters if property is an object', () => {
  let users = [mike, dan]
  let filtered = users.filter(it => objectHasValue(it, '6666'))
  expect(filtered.length).toBe(2)
})
