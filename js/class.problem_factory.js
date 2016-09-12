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
    return (instance.build() || instance);
  }
  Component.factories = [
    [
      /\{-?\d+(?:,-?\d+)*\}/,
      {type: "number", from: "set"},
      function(){
        var instance = this;
        instance.set = instance.source.replace(/\{|\}/g,"").split(",");
      }
    ],
    [
      /(?:\[|\()-?\d+,-?\d+(?:\]|\))/,
      {type: "number", from: "range"},
      function(){
        var instance = this;
        var chunks = instance.source.match(/(\(|\[)(-?\d+),(-?\d+)(\)|\])/);
        instance.min = {value: chunks[2], inclusive: (chunks[1] === "[")}
        instance.max = {value: chunks[3], inclusive: (chunks[4] === "]")}
      }
    ],
    [
      /[\+\-\*\/\=]+/,
      {type: "operator"},
      function(){
        var instance = this;
        instance.set = instance.source.split("");
      }
    ],
    [
      /\_.*?\_/,
      {blank: "true"},
      function(){
        var instance = this
        var newInstance = Component.createMany(instance.source.replace(/^_|_$/g,""))[0];
        newInstance.source = instance.source;
        newInstance.prop.blank = true;
        return newInstance;
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
  Component.createMany = function(source){
    var out = [];
    var getComponentType = function(){
      var n, l = arguments.length;
      for(n = 1; n < l; n += 1){
        if(arguments[n]){
          out.push(new Component(n - 1, arguments[n]));
          return;
        }
      }
    }
    source.replace(Component.matcher, getComponentType);
    return out;
  }

  public.sourceFrom = function(input){
    var instance = this;
    instance.source = input;
    instance.components = Component.createMany(instance.source);
  }
  public.generate = function(){
    var instance = this;
    var problem = new Problem();
    return problem;
  }

  return public;
})();

if(typeof module !== "undefined") global.ProblemFactory = ProblemFactory;
