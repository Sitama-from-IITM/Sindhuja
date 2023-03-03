window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// const loaderWrapper = document.getElementsByClassName("loader-wrapper");
// window.addEventListener('load', loadAnimation);

// function loadAnimation (){
//   console.log("loaded");
//   document.getElementsByTagName("body").style.display =  "none";
//   loaderWrapper.style.visibility = "none";
//   setTimeout(function () {
//     console.log("loaded");
//     loaderWrapper.style.visibility = "hidden";
//     document.querySelector("body").classList.add("block");
//   })
// }


let scrollcondn = document.getElementById("Scroll-top")

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollcondn.style.display = "block";
  } else {
    scrollcondn.style.display = "none";
  }
}



function scrollToTop(){

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }