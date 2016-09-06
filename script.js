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
    $("#problems").html( $("#problems").html() + problem.render() );
  });
}

var main = function(){
  $("#do_generate").on("click", placeProblems);
}

$(document).ready(main);
