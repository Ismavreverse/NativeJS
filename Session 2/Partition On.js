// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {

   var evenitems=[],odditems=[]
   for (i = 0; i < items.length; i++) { 
     pred(items[i])?evenitems.push(items[i]):odditems.push(items[i]);
   }

items.sort(function(a, b) {
  return b % 2 - a % 2
});
   //items = odditems.concat(evenitems);
   return odditems.length;
}

