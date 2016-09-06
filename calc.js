var Calc = {
  randomUpTo: function(max){
    return Math.floor(Math.random() * max);
  }
}

if(typeof module !== "undefined") global.Calc = Calc;
