function o(e, r) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && e[t]) {
      const n = e[t];
      if (i(n)) {
        if (o(n, r))
          return !0;
      } else if (Array.isArray(n)) {
        if (u(n, r))
          return !0;
      } else if (n.toString().toLowerCase().includes(r.toLowerCase()))
        return !0;
    }
  return !1;
}
function i(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function u(e, r) {
  return r = r.toLowerCase(), e.some((t) => {
    if (i(t)) {
      if (o(t, r))
        return !0;
    } else if (t.toString().toLowerCase().includes(r))
      return !0;
    return !1;
  });
}
export {
  o as default
};
