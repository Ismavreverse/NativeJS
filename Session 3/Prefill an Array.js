function prefill(n, v) {
  //parseInt considers the integer (till it reaches a letter or symbol or decimal point) of the given string
  //Math.abs takes only positive numbers or null
  if (parseInt(n) !== Math.abs(n)) {
    throw new TypeError( n + ' is invalid' );
  }  
  return Array(parseInt(n)).fill(v);
}
