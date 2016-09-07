var _ = {
  get: function(query){
    return document.querySelector(query);
  },
  getAll: function(query){
    return document.querySelectorAll(query);
  },
  repeatTimes: function(totalTimes, functionToRepeat){
    var currentTime = 0;
    while(currentTime < totalTimes){
      functionToRepeat();
      currentTime += 1;
    }
  }
}

if(typeof module !== "undefined") global._ = _;
