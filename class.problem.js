var Problem = function(){

}

Problem.prototype = {
  render: function(){
    var instance = this;
    return instance.addend[0] + " + " + instance.addend[1] + " = ___ ";
  }
}

if(typeof module !== "undefined") global.Problem = Problem;
