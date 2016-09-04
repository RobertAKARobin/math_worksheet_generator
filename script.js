var random = function(){
  return Math.floor(Math.random() * 10);
}

var generateProblem = function(){
  var firstNumber = random();
  var secondNumber = random();
  return (firstNumber + " + " + secondNumber + " = ___");
}

var main = function(){
  $("#problem").html(generateProblem());
}

$(document).ready(main);
