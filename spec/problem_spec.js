describe("Problem", function(){
  var factory = new ProblemFactory("[0-10] + [0-10] = __");
  var problem = factory.generate();
  describe("#render", function(){
    xit("returns a string", function(){
      expect(typeof problem.render()).toBe("string");
    });
    xit("returned string contains components", function(){
      var output = string.split(/ /g);
      expect(output).toContain(problem.component[0]);
      expect(output).toContain(problem.component[1]);
    });
  });
});
