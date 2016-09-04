var main = function(){
  var firstNumber = Math.floor(Math.random() * 10);
  var secondNumber = Math.floor(Math.random() * 10);
  $("#problem").html(firstNumber + " + " + secondNumber + " = ___");
}

$(document).ready(main);
