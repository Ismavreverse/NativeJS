function rentalCarCost(days) {
  var output = days * 40;
  output = (days >= 7) ? output - 50 : output;
  output = (days > 2 && days <7) ? output - 20 : output;
  return output;
}
