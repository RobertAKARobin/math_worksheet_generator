var Calc = require("../calc.js");

describe("Calc", function(){
  describe("#randomUpTo", function(){
    it("returns a random number up to N", function(){
      var output = Calc.randomUpTo(10);
      expect(output).toBeLessThan(10);
    });
  });
});
