describe("Template", function(){
  describe("#fillWith", function(){
    it("returns elements source with curly-bracketed fields replaced by input object", function(){
      var template = new Template("<div>{{testA}} {{testB}}</div>");
      var output = template.fillWith({
        testA: "foo",
        testB: "bar"
      });
      expect(output).toBe("<div>foo bar</div>");
    });
  });
  describe("#each", function(){
    it("renders a sub-template once for each item in an array", function(){
      var template = new Template("{{greet}}{{#each testStrings}} Go {{_value}} {{_index}}!{{/each}}");
      var output = template.fillWith({
        greet: "Hello!",
        testStrings: [
          "foo",
          "bar"
        ]
      });
      expect(output).toBe("Hello! Go foo 0! Go bar 1!");
    });
  });
  describe("#if", function(){
    it("allows conditional rendering", function(){
      var template = new Template("{{#each testStrings}}{{#if _index}} then {{/if}}{{_value}}{{/each}}");
      var output = template.fillWith({
        testStrings: [
          "testA",
          "testB"
        ]
      });
      expect(output).toBe("testA then testB");
    });
  });
});
