"use strict";

(function() {

  var element = document.getElementById("duck");


  element.addEventListener("click", function() {
    var x = Math.floor(Math.random()* 500);
    var y = Math.floor(Math.random()* 500);
    element.style.top = x + "px";
    element.style.left = y + "px";
    Comments.log("Duck clicked!");
  });

  console.log(element);
  console.log("Duck ready!");
})();
