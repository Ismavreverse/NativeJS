function partitionOn(pred, items) {
  var evenitems=[],odditems=[];
  for (i = 0; i < items.length; i++) { 
     pred(items[i]) ? evenitems.push(items[i]) : odditems.push(items[i]);
  }
  var updated = odditems.concat(evenitems);
  for (var i=0;i<updated.length;i++){
    items[i] = updated[i];
  }
   return odditems.length;  
}
