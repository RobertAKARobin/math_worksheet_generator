var Problem = function(){

}

Problem.prototype = {
  render: function(){
    var instance = this;
    return instance.template.fillWith(instance);
  }
}

if(typeof module !== "undefined") global.Problem = Problem;
