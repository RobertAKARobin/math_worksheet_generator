var random = function(){
  return Math.floor(Math.random() * 10);
}

var generateProblem = function(){
  var firstNumber = random();
  var secondNumber = random();
  return (firstNumber + " + " + secondNumber + " = ___");
}

var placeProblem = function(){
  $("#problems").html( $("#problems").html() + generateProblem());
}

var main = function(){
  var numberOfProblems = 10;
  var problemNumber = 0;
  while(problemNumber < numberOfProblems){
    placeProblem();
    problemNumber += 1;
  }
}

$(document).ready(main);
