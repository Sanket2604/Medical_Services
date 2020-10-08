var lastScrollTop = 0;

document.body.addEventListener("scroll", function(){
   var st = window.pageYOffset;
   if (st > lastScrollTop){
      console.log('Down')
   } else {
      console.log('Up')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);