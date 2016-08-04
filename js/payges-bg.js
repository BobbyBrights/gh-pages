window.onload = function() {
// Animation HäuserZeile ===================================


//=== http://codepen.io/anon/pen/vyzGw ======================
//=== http://greensock.com/forums/topic/9066-update-var-when-window-is-resized/ =======================================

// main animation function
function Animation(){

	var ww = $(window).width(),
	hauszeile = new TimelineMax();
	
  if(ww <=600){
	var time = 10;
	} 
	else if(ww >600){
	var time = 10;
	}
  
	hauszeile.to(zeile, time, {backgroundPosition: "100% 0px", repeat: -1, repeatDelay:1, yoyo:true, ease:Linear.easeNone});	
				  
	}

// run animation first time
	Animation();
		
// resize event handler

(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 1);
      };
	}
	// smartresize 
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

	})(jQuery,'smartresize');


// usage: ===============================================
	$(window).smartresize(function(){
		hauszeile.kill();
		Animation();
	});

// ==========================================================
}