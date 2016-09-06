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
});
