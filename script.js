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


/* Script for navigation bar */

const dropDownButtonEl = document.getElementById('drop-down-button');
const dropDownContentEl = document.querySelector('.drop-down-content');
const navBarLinksEl = document.querySelectorAll('.nav-item');

/* Adding Functionality to Contact Us Button */
dropDownButtonEl.addEventListener('click', function(){
    if(dropDownContentEl.style.display == 'flex')
      dropDownContentEl.style.setProperty('display', 'none');
    else 
      dropDownContentEl.style.setProperty('display', 'flex');
  });
  
  /* Removing Dropdown Content if any Nav Bar Button other than Contact Us is Clicked */
  for(var i = 0; i < navBarLinksEl.length; i++){
  navBarLinksEl[i].addEventListener('click', function(){
    dropDownContentEl.style.setProperty('display', 'none');
  });
  }

document.querySelector('.icon').addEventListener('click', function(){
  {
    document.querySelector('.nav-bar').style.setProperty('display', 'block');
    var x = document.querySelectorAll(".left-container,.right-container");
      for(var i = 0; i < x.length; i++){
      if (x[i].style.display === "block") {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
  }
});
