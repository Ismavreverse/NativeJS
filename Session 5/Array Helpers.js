Array.prototype.square = function() {
  return this.map(function(value) {
    return Math.pow(value, 2);
  });
}
Array.prototype.cube = function() {
  return this.map(function(value) {
    return Math.pow(value, 3);
  });
}
Array.prototype.sum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};
Array.prototype.average = function () {
    return this.sum() / this.length;
};
Array.prototype.even = function() {
  return this.filter(function(value) {
    return value % 2 === 0;
  });
}
Array.prototype.odd = function() {
  return this.filter(function(value) {
    return value % 2 !== 0;
  });
}
