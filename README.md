# object-has-value

This function takes two arguments - an object and a search term (`String`) - and returns true/false based on whether the object has a *value* matching the term.

## Why?

In many applications, I find myself needing an efficient function to test whether an object contains a search term. Many implementations I've seen do something simple like converting the object to a string and testing for a match on the string, but then you tend to get some false positives for things like object **properties**, when in reality you likely only want to test whether the object has a **value** matching your term. So I built this with optimal filtering performance in mind.

## What it does

It will return true if an object:

- has a value matching the search term exactly (`{ type: 'cat' }` and search term `'cat'`)
- has a value matching the search term, case-insensitive (`{ name: 'Fluffy' }` and search term `'fluffy'`)
- has a value the partially matches the search term, case-insensitive (`{ type: 'cat' }` and search term `'ca'`)

If a value is an object, it will recursively test that object's values.

If a value is an array, it will check each item in the array. If it encounters an object, it will again recursively test that object's values.

As soon as it encounters a match, it stops checking and returns `true`, for optimal performance.

## Usage

Can be used as a standalone function or as a function inside `Array.filter`.

### Standalone

```js
import { objectHasValue } from 'object-has-value'

const someObject = {
  ...
}

const hasValue = objectHasValue(someObject, 'your search term') // true/false
```

### `Array.filter`

```js
import { objectHasValue } from 'object-has-value'

const someArray = [...]

const filteredArray = someArray.filter(item => objectHasValue(item, 'your search term')) // array of objects matching search term
```

## Contributing

Find a bug? A missed use case? Performance enhancement? PRs welcome!

## License

MIT
