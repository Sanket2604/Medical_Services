function myFunction(x) {
    if (x.matches) {
        document.querySelector('.searchbtn').addEventListener('click', function (event) {
            event.preventDefault();
            console.log("yes")
            document.querySelector('.mobile_search').classList.toggle('click');
            document.querySelector('.inpjs').classList.toggle('click');
            document.querySelector('.srchjs').classList.toggle('click');
            return false;
        });
    }
    
  }
  
  var x = window.matchMedia("(max-width: 710px)")
  myFunction(x)
  x.addListener(myFunction)