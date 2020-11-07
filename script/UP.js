
var previous = window.scrollY;

window.addEventListener("scroll", function() {
  
  if (window.scrollY > previous) 
  {
    document
      .getElementsByClassName("UP")[0]
      .setAttribute("style", "margin-top:-150px");
  }
  
  else 
  {
 document.getElementsByClassName("UP")[0].setAttribute("style", "margin-top:0px");
  }

  previous = window.scrollY;
  
});
