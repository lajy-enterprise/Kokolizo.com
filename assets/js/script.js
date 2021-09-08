// scroll menu

window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
    if ( y >= 300 ) {
        
        $("#menu").addClass("scrollMenu");
        
    }else{
    
        $("#menu").removeClass("scrollMenu");
        
    }
  };



