// using `object` for the obj parameter throws a TS error for implicit 'any'.
// however, the whole point of this is that the object we're checking can be anything.
// rather than using 'any' as the type, we want to be explicit that is is an Object,
// but we simply do not care what the shape of that object is.
type FlexibleObject = {
  [key: string]: any
}

export function objectHasValue(obj: FlexibleObject, term: any): boolean {
  for (let prop in obj) {
    // loop through every property in the object
    if (Object.prototype.hasOwnProperty.call(obj, prop) && !!obj[prop]) {
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

function isObject(x: FlexibleObject) {
  return Object.prototype.toString.call(x) === '[object Object]'
}

function arrayContainsValue(arr: Array<any>, val: any) {
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

