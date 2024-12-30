import { expect, test } from 'vitest';
import { objectHasValue } from './main';
import * as data from '../tests/fixtures';

// tests
test('returns true if the object has a value matching the search term', () => {
  expect(objectHasValue(data.kitten, 'cat')).toBe(true)
})

test('returns false if the object does not have a value matching the search term', () => {
  expect(objectHasValue(data.kitten, 'dog')).toBe(false)
})

test('handles case insensitive values', () => {
  expect(objectHasValue(data.kitten, 'fluffy')).toBe(true)
})

test('handles partial matches', () => {
  expect(objectHasValue(data.kitten, 'flu')).toBe(true)
})

test('filters arrays of objects', () => {
  let arr = [data.kitten, data.puppy]
  let filtered = arr.filter(it => objectHasValue(it, 'Mike'))
  expect(filtered.length).toBe(2)
})

test('recursively filters if property is an object', () => {
  let users = [data.mike, data.dan]
  let filtered = users.filter(it => objectHasValue(it, '6666'))
  expect(filtered.length).toBe(2)
})

