describe("Problem", function(){
  describe("#render", function(){
    it("returns HTML for a Problem", function(){
      var problemTemplate = new ProblemTemplate({
        maxNumber: 10
      });
      var problem = problemTemplate.generate();
      var desiredOutput = problem.addend[0] + " + " + problem.addend[1] + " = ___ ";
      expect(problem.render()).toBe(desiredOutput);
    });
  });
});
