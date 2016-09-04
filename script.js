var random = function(){
  return Math.floor(Math.random() * 10);
}

var main = function(){
  var firstNumber = random();
  var secondNumber = random();
  $("#problem").html(firstNumber + " + " + secondNumber + " = ___");
}

$(document).ready(main);
