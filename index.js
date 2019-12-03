"use strict";

//Wait until the page is loaded to fire animations on
//landing page
$(document).ready(function() {
  document.querySelector("#introWords").classList.add("loaded");
  $(prepareModals);
});

// make Navbar "stick" on scroll
window.onscroll = function() {
  makeNavStick();
  highlightSection();
};

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// move to sections on click and underline applicable section

$(".scrollToSection").on("click", function() {
  let classes = this.className;
  let headerOffset = 70;
  if (classes.includes("aboutSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top - headerOffset - 20
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document.getElementById("sectionUnderline").classList.add("highlightAbout");
  } else if (classes.includes("projectSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#projectSection").offset().top - headerOffset - 30
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightProjects");
  } else if (classes.includes("contactSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top - headerOffset - 20
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightContact");
  } else {
    console.log("section to scroll not recognized");
  }
});

// move underline to applicable section based on scroll

function highlightSection() {
  let aboutPos = document.getElementById("about").offsetTop - 150;
  let projectPos =
    document.getElementById("projectSection").offsetTop -
    document.getElementById("about").offsetHeight / 2;
  let contactPos =
    document.getElementById("contact").offsetTop -
    document.getElementById("projectSection").offsetHeight / 5;
  let currentPos = window.pageYOffset;

  if (currentPos >= aboutPos && currentPos < projectPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document.getElementById("sectionUnderline").classList.add("highlightAbout");
    document.getElementById("sectionUnderline").style.visibility = "visible";
  } else if (currentPos >= projectPos && currentPos < contactPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightProjects");
  } else if (currentPos >= contactPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightContact");
  } else if (currentPos < aboutPos - 50) {
    document.getElementById("sectionUnderline").style.visibility = "hidden";
  }
}

function prepareModals() {
  var beerBellyModal = document.getElementById("beerBellyModal");
  var beerBellyModalButton = document.getElementById("beerBelly");
  var pantryModal = document.getElementById("pantryModal");
  var pantryModalButton = document.getElementById("pantry");

  // need way to determine which project is being clicked
  // maybe set the class onclick to active?

  beerBellyModalButton.onclick = function() {
    beerBellyModal.style.display = "block";
  };

  pantryModalButton.onclick = function() {
    pantryModal.style.display = "block";
    pantryModal.firstElementChild.classList.add("active");
  };

  //   span.onclick = function() {
  //     beerBellyModal.style.display = "none";
  //   };
  $(closeModals);
}

function closeModals() {
  var activeModal = document.getElementsByClassName("active")[0];
  console.log(activeModal);
  var span = activeModal.firstElementChild;
  console.log(span);

  span.onclick = () => (activeModal.style.display = "none");
  activeModal.classList.remove("active");
}
