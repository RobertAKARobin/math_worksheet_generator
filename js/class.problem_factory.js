var ProblemFactory = function(){
  var instance = this;
  instance.components = [];
}

ProblemFactory.prototype = (function(){
  var public = {};
  var private = {};

  var matcher = {
  }

/*
"[" inclusive, "(" exclusive, "{" set
  [0,5] = {0,1,2,3,4,5}
  [0,5) = {0,1,2,3,4}
  (0,5) = {1,2,3,4}
*/

  var Component = function(num, source){
    var instance = this;
    var factory = Component.factories[num];
    instance.source = source;
    instance.prop = factory[1];
    instance.build = factory[2];
    instance.build();
  }
  Component.factories = [
    [
      /\{-?\d+(?:,-?\d+)*\}/,
      {type: "number", from: "set"},
      function(){
        var instance = this;
      }
    ],
    [
      /(?:\[|\()-?\d+,-?\d+(?:\]|\))/,
      {type: "number", from: "range"},
      function(){
        var instance = this;
      }
    ],
    [
      /[\+\-\*\/\=]+/,
      {type: "operator"},
      function(){
        var instance = this;
      }
    ],
    [
      /\_.*?\_/,
      {blank: "true"},
      function(){
        var instance = this;
      }
    ]
  ];
  Component.matcher = (function(){
    var out = [];
    Component.factories.forEach(function(factory){
      out.push("(" + factory[0].source.toString() + ")");
    });
    return new RegExp(out.join("|"), "g");
  })();
  Component.create = function(){
    var n, l = arguments.length;
    for(n = 1; n < l; n += 1){
      if(arguments[n]) return private.instance.components.push(
        new Component(n - 1, arguments[n])
      );
    }
  }

  public.sourceFrom = function(input){
    var instance = private.instance = this;
    instance.source = input;
    instance.components = [];
    instance.source.replace(Component.matcher, Component.create);
  }
  public.generate = function(){
    var instance = this;
    var problem = new Problem();
    return problem;
  }

  return public;
})();

if(typeof module !== "undefined") global.ProblemFactory = ProblemFactory;
