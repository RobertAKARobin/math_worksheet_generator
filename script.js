var main = function(){
  var firstNumber = Math.random();
  var secondNumber = Math.random();
  $("#problem").html(firstNumber + " + " + secondNumber + " = ___");
}

$(document).ready(main);
