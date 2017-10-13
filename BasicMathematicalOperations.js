function basicOp(operation, value1, value2) {
  var obj = { 
     '+' : function(value1, value2) { return value1 + value2; },
     '-' : function(value1, value2) { return value1 - value2; },
     '*' : function(value1, value2) { return value1 * value2; },
     '/' : function(value1, value2) { return value1 / value2; }
  }
  return obj[operation](value1, value2);
}
