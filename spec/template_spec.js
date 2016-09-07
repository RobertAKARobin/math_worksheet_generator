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
  describe("[data-repeat]", function(){
    xit("renders a sub-template once for each item in an array", function(){
      var template = new Template("{{greet}} <span data-repeat='testStrings'>Go {{value}}!</span>");
      var output = template.fillWith({
        greet: "Hello!",
        testStrings: [
          "testA",
          "testB"
        ]
      });
      expect(output).toBe("Hello! Go testA! Go testB!");
    });
  });
});
