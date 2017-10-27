function prefill(n, v) {
  try {
    //Array.apply(null, new Array(parseInt(n, 10))) --- here will consider null value to the Array having decimal values of size 10
    var arr = Array.apply(null, new Array(parseInt(n, 10)));
    //The map() method creates a new array with the results of calling a provided function on every element in the calling array.
    return arr.map(function() { 
        return v;
    });
  } catch (e) {
    throw new TypeError(n+' is invalid');
  }
}
