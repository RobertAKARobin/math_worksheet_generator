var repeatTimes = function(totalTimes, functionToRepeat){
  var currentTime = 0;
  while(currentTime < totalTimes){
    functionToRepeat();
    currentTime += 1;
  }
}

var randomUpTo = function(max){
  return Math.floor(Math.random() * max);
}

var generateProblem = function(){
  var maxNumber = $("#max_number").val();
  var firstNumber = randomUpTo(maxNumber);
  var secondNumber = randomUpTo(maxNumber);
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
