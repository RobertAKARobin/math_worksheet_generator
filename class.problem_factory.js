var ProblemFactory = function(options){
  var instance = this;
  instance.options = options;
}

ProblemFactory.prototype = {
  generate: function(){
    var instance = this;
    var problem = new Problem();
    problem.addend = [
      Calc.randomUpTo(instance.options.maxNumber),
      Calc.randomUpTo(instance.options.maxNumber)
    ];
    problem.sum = problem.addend[0] + problem.addend[1];
    return problem;
  }
}

if(typeof module !== "undefined") global.ProblemFactory = ProblemFactory;