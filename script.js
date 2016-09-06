var repeatTimes = function(totalTimes, functionToRepeat){
  var currentTime = 0;
  while(currentTime < totalTimes){
    functionToRepeat();
    currentTime += 1;
  }
}

var generateProblem = function(){
  var maxNumber = $("#max_number").val();
  var firstNumber = Calc.randomUpTo(maxNumber);
  var secondNumber = Calc.randomUpTo(maxNumber);
  return (firstNumber + " + " + secondNumber + " = ___");
}

var placeProblem = function(){
  $("#problems").html( $("#problems").html() + generateProblem());
}

var placeProblems = function(){
  var numberOfProblems = $("#total_problems").val();
  repeatTimes(numberOfProblems, placeProblem);
}

var main = function(){
  $("#do_generate").on("click", placeProblems);
}

$(document).ready(main);
