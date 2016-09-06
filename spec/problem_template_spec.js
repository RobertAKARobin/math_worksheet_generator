describe("ProblemTemplate", function(){
  describe("#generate", function(){
    it("returns two addends and a sum", function(){
      var maxNumber = 10;
      var problemTemplate = new ProblemTemplate({
        maxNumber: maxNumber
      });
      var problem = problemTemplate.generate();
      expect(problem.addend[0]).toBeLessThan(maxNumber);
      expect(problem.addend[1]).toBeLessThan(maxNumber);
      expect(problem.sum).toBe(problem.addend[0] + problem.addend[1]);
    });
  });
});
