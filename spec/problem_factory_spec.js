describe("ProblemFactory", function(){
  var factory = new ProblemFactory();
  factory.sourceFrom("[1,10] + [1,10] = __");
  describe("#sourceFrom", function(){
    xit("creates an array of components", function(){
      expect(factory.components).toBeAnArray();
    });
    xit("generates a testable expression for equation", function(){
      expect(factory.expression).toBe("problem.components[0] + problem.components[2] === problem.components[4]");
    });
    xit("matches chunks of strings to component types", function(){
      var component = function(string){
        var factory = new ProblemFactory();
        factory.sourceFrom(string);
        return factory.components[0];
      }
      expect(component("[1,10]")).toBeLessThan(11);
      expect(component("[1,10]")).toBeGreaterThan(0);
      expect(component("+").type).toBe("operand");
      expect(component("__").type).toBe("blank");
    });
  });
  describe("#generate", function(){
    var problem = factory.generate();
    xit("returns a Problem", function(){
      expect(problem instanceof Problem).toBeTruthy();
    });
    xit("tests the problem's components evaluate correctly", function(){
      expect(factory.test(problem)).toBeTruthy();
    });
  });

  describe("Component", function(){
    var component = factory.components[0];
    xit("has a type", function(){
      expect(component.type).toBe("number");
    });
    xit("has a max and min", function(){
      expect(component.min).toBe(1);
      expect(component.max).toBe(10);
    });
    describe("#test", function(){
      xit("determines whether an input matches the components' guidelines", function(){
        expect(component.test(3)).toBeTruthy();
        expect(component.test(-5)).toBeFalsy();
        expect(component.test("a")).toBeFalsy();
      });
    });
    describe("#generate", function(){
      xit("returns a value matching the components' guidelines", function(){
        var result = component.generate();
        expect(result).toBeLessThan(component.max);
        expect(result).toBeGreaterThan(component.min);
      });
    });
  });
});
