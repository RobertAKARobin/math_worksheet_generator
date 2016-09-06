var _ = {
  repeatTimes: function(totalTimes, functionToRepeat){
    var currentTime = 0;
    while(currentTime < totalTimes){
      functionToRepeat();
      currentTime += 1;
    }
  }
}

if(typeof module !== "undefined") global._ = _;
