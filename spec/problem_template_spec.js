describe("ProblemTemplate", function(){
  describe("#generate", function(){
    it("returns two addends and a sum", function(){
      var maxNumber = 10;
      var problem = new ProblemTemplate({
        maxNumber: maxNumber
      });
      var output = problem.generate();
      expect(output[0]).toBeLessThan(maxNumber);
      expect(output[1]).toBeLessThan(maxNumber);
      expect(output[2]).toBe(output[0] + output[1]);
    });
  });
});
