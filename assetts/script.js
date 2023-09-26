
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Jotain tekstiä ilmestyy";
}

function myFunction(imgs) {
  
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
