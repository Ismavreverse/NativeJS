function rentalCarCost(days) {
  var output = days * 40;
  return output - (days > 6 ?  50 : days > 2 ?  20 : 0);
  }
  /* lets get in details with the above statement
  days>6 ? 50 : days > 2 ? 20 : 0
  if given days is greated than 6 the amount to be deducted would be 50 and the statement stops its execution.
  if the given days is less than or eual to 6 50 is ignored and second condition is checked and either 20 is deduced or 0 */
