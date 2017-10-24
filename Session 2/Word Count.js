function countWords(str) {
  return str
     .trim()
     .replace( /\s+/g , ' ') //we are using regular expression so it should work with non-whitespace(ex. breakspace) chars"﻿Hello﻿World "
     .split(' ')
     .filter(function(n) { return n != '' })
     .length;
}
