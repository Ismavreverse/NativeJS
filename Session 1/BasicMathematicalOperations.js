function basicOp(operation, value1, value2) {
  var OBJ = { 
     '+' : function(value1, value2) { return value1 + value2; },
     '-' : function(value1, value2) { return value1 - value2; },
     '*' : function(value1, value2) { return value1 * value2; },
     '/' : function(value1, value2) { return value1 / value2; }
  }
  return OBJ[operation](value1, value2);
}
