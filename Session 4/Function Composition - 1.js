function compose(f,g) {
  return function() {
     return f(g.apply(this, arguments));
  };
}
 -- ALTERNATE SOLUTION --
//if any parameter say 'n' here has ... as prefix then it is considered as an array statring from 0 to <array.length 
//and this is rest parameter syntax
   return function(...n) {
        return f(g(...n));
    }
