var Template = function(input){
  var instance = this;
  instance.source = null;
  instance.fields = {};
  instance.fillOneField = function(nil, innerText){
    return instance.fields[innerText];
  }

  instance.loadInput(input);
}

Template.prototype = {
  loadInput: function(input){
    var instance = this;
    if(typeof input === "string"){
      instance.source = input;
    }else if(typeof Node !== "undefined" && input instanceof Node){
      instance.loadElement(input);
    }
  },
  loadElement: function(element){
    var instance = this;
    instance.source = element.innerHTML;
    element.parentNode.removeChild(element);
  },
  fillWith: function(fields){
    var instance = this;
    instance.fields = fields;
    return instance.source.replace(/\{\{(.*?)\}\}/g, instance.fillOneField);
  }
}

if(typeof module !== "undefined") global.Template = Template;
