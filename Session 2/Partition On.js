function partitionOn(pred, items) {
   var evenitems=[],odditems=[];
   for (i = 0; i < items.length; i++) { 
     pred(items[i])?evenitems.push(items[i]):odditems.push(items[i]);
   }
   items.sort(function(a, b) {
      return b % 2 - a % 2
   });
   //items = odditems.concat(evenitems);
   return odditems.length;
}
