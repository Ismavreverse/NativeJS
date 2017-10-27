function prefill(n, v) {
  try {
    var arr = Array.apply(null, new Array(parseInt(n, 10)));
    return arr.map(function() {
        return v;
    });
  } catch (e) {
    throw new TypeError(n+' is invalid');
  }
}
