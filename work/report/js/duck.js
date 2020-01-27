"use strict";

(function() {

  var element = document.getElementByID("duck");

  element.addEventListener("click", function() {
    element.innerHTML = element.innerHTML + "<p> QUACK </p>";
    Comments.log("Duck clicked!");
  });

  element.addEventListener("mouseover", function() {
    element.style.left = element.OffsetLeft + 20 + "px";
    console.log(element.style.left);
    console.log(element.OffsetLeft);
    console.log("Mouse Over");
  });
  console.log(element);
  console.log("Duck ready!");
})();
