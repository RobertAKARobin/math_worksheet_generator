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
  var firstNumber = randomUpTo(10);
  var secondNumber = randomUpTo(10);
  return (firstNumber + " + " + secondNumber + " = ___");
}

var placeProblem = function(){
  $("#problems").html( $("#problems").html() + generateProblem());
}

var main = function(){
  repeatTimes(10, placeProblem);
}

$(document).ready(main);
