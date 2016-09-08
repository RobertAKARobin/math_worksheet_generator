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
  var page = _.get("#page");
  var section = new Template(_.get("[data-template='section']"));
  _.repeatTimes(60, function(currentTime){
    page.innerHTML += section.fillWith({
      id: currentTime
    });
  });
}

window.addEventListener("DOMContentLoaded", main);
