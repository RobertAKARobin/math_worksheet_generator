var Calc = require("../calc.js");
var _ = require("../helpers.js");

describe("Calc", function(){
  describe("#randomUpTo", function(){
    it("always returns a random number up to N", function(){
      _.repeatTimes(20, function(){
        var maxNumber = 10;
        var output = Calc.randomUpTo(maxNumber);
        expect(output).toBeLessThan(maxNumber);
      });
    });
    it("always returns a whole number", function(){
      _.repeatTimes(20, function(){
        var output;
        var maxNumber = 10;
        output = Calc.randomUpTo(maxNumber);
        expect(output % 1).toBe(0);
      });
    });
  });
});
