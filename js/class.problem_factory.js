var ProblemFactory = function(){
  var instance = this;
  instance.components = [];
}

ProblemFactory.prototype = (function(){
  var public = {};
  var private = {};

  var componentTypes = [
    {
      pattern: /\[-?\d+(?:,-?\d+)*\]/,
      type: "number",
      from: "set"
    },
    {
      pattern: /\[-?\d+--?\d+?\]/,
      type: "number",
      from: "range"
    },
    {
      pattern: /[\+\-\*\/\=]+/,
      type: "operand",
      from: "set"
    },
    {
      pattern: /\_.*?\_/,
      blank: true
    }
  ];

  var componentMatcher = (function(){
    var out = [];
    componentTypes.forEach(function(type){
      out.push("(" + type.pattern.source.toString() + ")");
    });
    return new RegExp(out.join("|"), "g");
  })();

  var findComponentType = function(){
    var n, l = arguments.length;
    for(n = 1; n < l; n += 1){
      if(arguments[n]) return private.instance.components.push({
        type: componentTypes[n - 1],
        source: arguments[n]
      });
    }
  }

  public.sourceFrom = function(input){
    var instance = private.instance = this;
    instance.source = input;
    instance.components = [];
    instance.source.replace(componentMatcher, findComponentType);
  }
  public.generate = function(){
    var instance = this;
    var problem = new Problem();
    return problem;
  }

  return public;
})();

if(typeof module !== "undefined") global.ProblemFactory = ProblemFactory;
