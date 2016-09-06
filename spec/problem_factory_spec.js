describe("ProblemFactory", function(){
  describe("#generate", function(){
    it("returns two addends and a sum", function(){
      var maxNumber = 10;
      var problemFactory = new ProblemFactory({
        maxNumber: maxNumber
      });
      var problem = problemFactory.generate();
      expect(problem.addend[0]).toBeLessThan(maxNumber);
      expect(problem.addend[1]).toBeLessThan(maxNumber);
      expect(problem.sum).toBe(problem.addend[0] + problem.addend[1]);
    });
  });
});
