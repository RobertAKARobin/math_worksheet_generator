var placeProblem = function(){
  var maxNumber = $("#max_number").val();
  $("#problems").html( $("#problems").html() + generateProblem());
}

var placeProblems = function(){
  var numberOfProblems = $("#total_problems").val();
  var maxNumber = $("#max_number").val();
  var problemTemplate = new ProblemTemplate({
    maxNumber: maxNumber
  });
  _.repeatTimes(numberOfProblems, function(){
    var problem = problemTemplate.generate();
    var renderedProblem = problem[0] + " + " + problem[1] + " = ___ ";
    $("#problems").html( $("#problems").html() + renderedProblem );
  });
}

var main = function(){
  $("#do_generate").on("click", placeProblems);
}

$(document).ready(main);
