var placeProblems = function(){
  var numberOfProblems = $("#total_problems").val();
  var maxNumber = $("#max_number").val();
  var problemFactory = new ProblemFactory({
    maxNumber: maxNumber
  });
  _.repeatTimes(numberOfProblems, function(){
    var problem = problemFactory.generate();
    $("#problems").html( $("#problems").html() + problem.render() );
  });
}

var main = function(){
  $("#do_generate").on("click", placeProblems);
}

$(document).ready(main);
