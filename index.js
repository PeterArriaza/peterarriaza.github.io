'use strict';

//Wait until the page is loaded to fire animations on 
//landing page
$(document).ready(function () {
    document.querySelector("#introWords").classList.add("loaded");

});

// make Navbar "stick" on scroll
window.onscroll = function () {
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
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// move to sections on click
$('.scrollToSection').on('click', function () {
    let classes = this.className;
    let headerOffset = 70;
    if (classes.includes('aboutSection')) {
        $('html,body').animate({
                scrollTop: ($("#about").offset().top) + headerOffset
            },
            'slow');
    } else if (classes.includes('projectSection')) {
        $('html,body').animate({
                scrollTop: $("#projectSection").offset().top + headerOffset
            },
            'slow');
    } else if (classes.includes('contactSection')) {
        $('html,body').animate({
                scrollTop: $("#contact").offset().top + headerOffset
            },
            'slow');
    } else {
        console.log('section to scroll not recognized');
    }
});

function highlightSection() {
    let aboutPos = document.getElementById("about").offsetTop - 150;
    let projectPos = document.getElementById("projectSection").offsetTop - (document.getElementById("about").offsetHeight / 2);
    let contactPos = document.getElementById("contact").offsetTop - (document.getElementById("projectSection").offsetHeight / 5);
    let currentPos = window.pageYOffset;

    if (currentPos >= aboutPos && currentPos < projectPos) {
        document.getElementById("aboutLink").classList.add("underline");
        document.getElementById("projectLink").classList.remove("underline");
        document.getElementById("contactLink").classList.remove("underline");
    } else if (currentPos >= projectPos && currentPos < contactPos) {
        document.getElementById("projectLink").classList.add("underline");
        document.getElementById("aboutLink").classList.remove("underline");
        document.getElementById("contactLink").classList.remove("underline");

    } else if (currentPos >= contactPos) {
        document.getElementById("projectLink").classList.remove("underline");
        document.getElementById("aboutLink").classList.remove("underline");
        document.getElementById("contactLink").classList.add("underline");

    } else if (currentPos < aboutPos) {
        document.getElementById("projectLink").classList.remove("underline");
        document.getElementById("aboutLink").classList.remove("underline");
        document.getElementById("contactLink").classList.remove("underline");

    }

}
