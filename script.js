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
  placeProblem();
  placeProblem();
  placeProblem();
}

$(document).ready(main);
