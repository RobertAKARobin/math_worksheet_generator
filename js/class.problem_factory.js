var ProblemFactory = function(){
  var instance = this;
  instance.components = [];
}

ProblemFactory.prototype = {
  sourceFrom: function(input){

  },
  generate: function(){
    var instance = this;
    var problem = new Problem();
    return problem;
  }
}

if(typeof module !== "undefined") global.ProblemFactory = ProblemFactory;
