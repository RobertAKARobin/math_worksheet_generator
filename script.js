var placeProblems = function(){
  var numberOfProblems = _.get("#total_problems").value;
  var maxNumber = _.get("#max_number").value;
  var problemFactory = new ProblemFactory({
    maxNumber: maxNumber
  });
  _.repeatTimes(numberOfProblems, function(){
    var problem = problemFactory.generate();
    _.get("#problems").innerHTML += problem.render();
  });
}

var main = function(){
  _.get("#do_generate").addEventListener("click", placeProblems);
}

window.addEventListener("DOMContentLoaded", main);
