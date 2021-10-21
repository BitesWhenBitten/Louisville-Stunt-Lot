//Mid-range sticky height
//get navx
navx = document.getElementById("xNav");

//define the function
function xNavHeight() {
    if (window.innerWidth > 768 && window.innerWidth < 980) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navx.style.top = "0";
        } else {
            navx.style.top = "38rem";
        }

    } else {
        navx.style.top = "0";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down, show the button


function scrollFunction() {

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}

// When clicked, scroll to the top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
    scrollFunction();
    xNavHeight();
};


//Show Hide function

//grab elements and set initial hide

function setHideElements() {
    x = document.getElementsByClassName("onload");

    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        element.style.display = "none";

    }

}

function show(element) {
    element.style.display = "block";
}


function sh(element) {

    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

window.onload = setHideElements();