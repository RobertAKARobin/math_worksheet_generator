var Template = function(input){
  var instance = this;
  instance.source = null;

  instance.loadInput(input);
}

Template.prototype = (function(){
  var public = {};
  var private = {};

  var fillOneField = function(nil, innerText){
    return private.fields[innerText];
  }

  public.loadInput = function(input){
    var instance = this;
    if(typeof input === "string"){
      instance.source = input;
    }else if(typeof Node !== "undefined" && input instanceof Node){
      instance.loadElement(input);
    }
  }

  public.loadElement = function(element){
    var instance = this;
    instance.source = element.innerHTML;
    element.parentNode.removeChild(element);
  }

  public.fillWith = function(fields){
    var instance = this;
    private.fields = fields;
    return instance.source.replace(/\{\{(.*?)\}\}/g, fillOneField);
  }

  return public;
})();

if(typeof module !== "undefined") global.Template = Template;
