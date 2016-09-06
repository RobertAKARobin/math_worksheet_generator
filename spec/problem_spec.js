describe("Problem", function(){
  describe("#render", function(){
    it("returns HTML for a Problem", function(){
      var problemFactory = new ProblemFactory({
        maxNumber: 10
      });
      var problem = problemFactory.generate();
      var desiredOutput = problem.addend[0] + " + " + problem.addend[1] + " = ___ ";
      expect(problem.render()).toBe(desiredOutput);
    });
  });
});
