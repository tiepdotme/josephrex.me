// http://dustindiaz.com/smallest-domready-ever
function ready(cb) {
	/in/.test(document.readyState) // in = loadINg
		? setTimeout(ready.bind(null, cb), 9)
		: cb();
}
ready(function(){
	// Progressive Reading Bar
	var bar = document.querySelector('.scroll-progress');
	if(bar){
		document.addEventListener("scroll", function(e){
		  var dw = document.body.scrollWidth,
		      dh = document.body.scrollHeight,
		      wh = window.innerHeight,
		      pos = document.body.scrollTop,
		      bw = ((pos / (dh - wh)) * 100);
		  bar.style.width = bw+'%';
		});
	}
	// Date for copyright
	var presentDate = new Date(), showDate = document.querySelector('.this_year');
	showDate.innerHTML = presentDate.getFullYear();
	// Scroll to top
  var topBtn = document.querySelector('.scrollup');
  if(topBtn){
	  document.addEventListener("scroll", function(e){
	    if(document.body.scrollTop > 100){
	        topBtn.style.display = 'block';
	    }else{
	      topBtn.style.display = 'none';
	    }
	  });
		document.querySelector('.scrollup').onclick = function () {
	    scrollTo(document.body, 0, 1250);   
		}
	}

	// Sticky logo on home page
	var wrap = document.getElementById("js-wrap");
	if(wrap && window.innerWidth >= 1024){
		document.addEventListener("scroll", function(e) {
			fixPoint = parseInt( getComputedStyle(wrap).getPropertyValue('top') );
			wrap.classList.toggle( "fixed", document.body.scrollTop > fixPoint );
		});
	}
	// Handling Navigation
	menuIcon = document.querySelectorAll('nav > svg');
	Array.prototype.forEach.call( menuIcon, function(el) {
	   el.addEventListener('click', function() {
	     el.parentNode.classList.toggle('active');
	  }, false);
	});
});
// Make it better http://jsfiddle.net/yunya12n/
(function(){
	document.querySelector('nav > ul').onclick = function(){
		this.parentNode.classList.toggle('active');
	}
})();
function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};