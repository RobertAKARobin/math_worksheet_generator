var repeatTimes = function(totalTimes, functionToRepeat){
  var currentTime = 0;
  while(currentTime < totalTimes){
    functionToRepeat();
    currentTime += 1;
  }
}

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
  repeatTimes(10, placeProblem);
}

$(document).ready(main);
