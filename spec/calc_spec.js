var Calc = require("../calc.js");

describe("Calc", function(){
  describe("#randomUpTo", function(){
    it("always returns a random number up to N", function(){
      var output;
      var maxNumber = 10;
      var timesToTest = 20;
      var testNum = 0;
      while(testNum < timesToTest){
        output = Calc.randomUpTo(maxNumber);
        expect(output).toBeLessThan(maxNumber);
        testNum += 1;
      }
    });
    it("always returns a whole number", function(){
      var output;
      var maxNumber = 10;
      var timesToTest = 20;
      var testNum = 0;
      while(testNum < timesToTest){
        output = Calc.randomUpTo(maxNumber);
        expect(output % 1).toBe(0);
        testNum += 1;
      }
    });
  });
});
