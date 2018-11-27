module.exports = function(obj, term) {
  for (let prop in obj) {
    // loop through every property in the object
    if (obj.hasOwnProperty(prop) && !!obj[prop]) {
      const thisProp = obj[prop]

      if (isObject(thisProp)) {
        // we have an object. recursive filter on its properties.
        if (objectHasValue(thisProp, term)) {
          return true
        }
      } else if (Array.isArray(thisProp)) {
        if (arrayContainsValue(thisProp, term)) {
          return true
        }
      } else if (
        thisProp
          .toString()
          .toLowerCase()
          .includes(term.toLowerCase())
      ) {
        return true
      }
    }
  }
  return false
}

function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]'
}

function arrayContainsValue(arr, val) {
  val = val.toLowerCase()
  return arr.some(el => {
    if (isObject(el)) {
      if (objectHasValue(el, val)) {
        return true
      }
    } else if (
      el
        .toString()
        .toLowerCase()
        .includes(val)
    ) {
      return true
    }
    return false
  })
}
