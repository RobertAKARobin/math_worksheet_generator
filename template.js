var Template = function(input){
  var instance = this;
  instance.source = null;

  instance.loadInput(input);
}

Template.prototype = (function(){
  var public = {};
  var private = {};

  var regex = {
    directive: /\{\{\#(.*?) ?(.*?)\}\}(.*?)\{\{\/\1\}\}/g,
    field: /\{\{(.*?)\}\}/g
  }

  var directives = {
    each: function(source, field){
      var values = private.fields[field];
      var index, times = values.length;
      var output = "";
      for(index = 0; index < times; index += 1){
        private.fields._value = values[index];
        private.fields._index = index;
        output += fill(source);
      }
      return output;
    }
  }

  var fillOneField = function(nil, innerText){
    return private.fields[innerText];
  }

  var fillDirectives = function(nil, directive, args, innerText){
    var output = innerText;
    if(directive) output = directives[directive](innerText, args);
    return output;
  }

  var fill = function(source){
    var output = source;
    output = output.replace(regex.directive, fillDirectives);
    output = output.replace(regex.field, fillOneField);
    return output;
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
    return fill(instance.source);
  }

  return public;
})();

if(typeof module !== "undefined") global.Template = Template;
