(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();


 var linkNav = document.querySelectorAll('[href^="#"]'),
     V = 0.3;
 for (var i = 0; i < linkNav.length; i++) {
   linkNav[i].addEventListener('click', function(e) {
     e.preventDefault();
     var w = window.pageYOffset,
         hash = this.href.replace(/[^#]*(.*)/, '$1'); 
         t = document.querySelector(hash).getBoundingClientRect().top,
         start = null;
     requestAnimationFrame(step);
     function step(time) {
       if (start === null) start = time;
       var progress = time - start,
           r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
       window.scrollTo(0,r);
       if (r != w + t) {
         requestAnimationFrame(step)
       } else {
         location.hash = hash
       }
     }
   }, false);
 }