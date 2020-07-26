$( window ).on('load',function() {    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        $(".pc").css({"display":"none"});
        $('.mobile').css({"display":"unset"})
        
    }   

    else{
        $(".pc").css({"display":"unset"});
        $('.mobile').css({"display":"none"})
    }
  });