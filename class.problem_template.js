if(typeof module !== "undefined") var Calc = require("./calc.js");

var ProblemTemplate = function(options){
  var instance = this;
  instance.options = options;
}

ProblemTemplate.prototype = {
  generate: function(){
    var instance = this;
    var firstAddend = Calc.randomUpTo(instance.options.maxNumber);
    var secondAddend = Calc.randomUpTo(instance.options.maxNumber);
    var sum = (firstAddend + secondAddend);
    return [firstAddend, secondAddend, sum];
  }
}

if(typeof module !== "undefined") module.exports = ProblemTemplate;
