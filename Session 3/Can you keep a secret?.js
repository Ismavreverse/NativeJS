function createSecretHolder(secret) {
   this.secret = secret;
   this.getSecret = function() {
     return this.secret;
   }
   this.setSecret = function(newValue) {
     this.secret = newValue;
   }
   return secret;
}

//Test cases used for validating this code

var test1 = new createSecretHolder(9)
Test.assertSimilar(test1.getSecret(),9);
test1.setSecret(3);
Test.assertSimilar(test1.getSecret(),3);
test1.setSecret(4);
Test.assertSimilar(test1.getSecret(),4);
test1.setSecret(11);
Test.assertSimilar(test1.getSecret(),11);
test1.setSecret(48);
Test.assertSimilar(test1.getSecret(),48);
test1.setSecret(0);
Test.assertSimilar(test1.getSecret(),0);
