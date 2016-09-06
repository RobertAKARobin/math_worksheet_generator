var _ = require("../helpers.js");

describe("Helpers", function(){
  describe("#repeatTimes", function(){
    it("repeats the provided function N times", function(){
      var output = [];
      _.repeatTimes(5, function(){
        output.push("foo");
      });
      expect(output.join(" ")).toBe("foo foo foo foo foo");
    });
  });
});
