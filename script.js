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


/* -------------------------------------------------------Script for navigation bar-------------------------------------------------- */


const cardButtonEl = document.querySelector('.card-button');
const cardContentEl = document.querySelector('.card-content');
const navBarLinks = document.querySelectorAll(".topnav a,.topnav button");


/* Adding Responsiveness to Navigation Bar */
function addDropDown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}

/* Removing Drop down on clicking card button */
function removeDropDown(){
  var x = document.getElementById("myTopnav");
  if (x.className === "responsive") {
    x.className -= "responsive";
  } else {
    x.className = "topnav";
  }
}

/* Adding Functionality to Contact Us Button */
cardButtonEl.addEventListener('click', function ContactUs(){
  
    if(cardContentEl.style.display == 'table')
      cardContentEl.style.setProperty('display', 'none');
    else 
      cardContentEl.style.setProperty('display', 'table');
      removeDropDown();
  });

/* Adding Sticky Functionality to Navigation Bar */
  window.onscroll = function() {stickyFunction()};

var navbar = document.querySelector(".navigation-bar");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Removing card Content if any Nav Bar Button other than Contact Us is Clicked */ 
console.log(navBarLinks);
for (let i = 0; i < navBarLinks.length; i++) {
  if(i!==7){
   navBarLinks[i].addEventListener('click',function(e){
    cardContentEl.style.setProperty('display', 'none');
   });
  }
}

