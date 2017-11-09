function compose() {
  var parameters = arguments;
  return function(value) {
    var number = value;
    for ( var eachParameterId in parameters )
        number = parameters[parameters.length - eachParameterId - 1] (number);
    return number;
  }
}
