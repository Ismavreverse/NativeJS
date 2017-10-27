function createFunctions(n) {
  var callbacks = [];
  for (var i=0; i<n; i++) {
    callbacks.push(callback(i));
  }
  function callback(val) {
    return function(){
      return val;
    }
  }
  return callbacks;
}
