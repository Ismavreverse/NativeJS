function prefill(n, v) {
  try {
    return Array(parseInt(n, 10)).fill(v);
  } catch (e) {
    throw new TypeError(n+' is invalid');
  }   
}
