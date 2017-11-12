function isSantaClausable(obj) {
  if( !obj.sayHoHoHo || !obj.distributeGifts || !obj.goDownTheChimney || 
  typeof(obj.sayHoHoHo) === "boolean" || typeof(obj.distributeGifts) === "boolean" || typeof(obj.goDownTheChimney) === "boolean")
      return false;
  else 
      return true;
}
