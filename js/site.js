//Mid-range sticky height
//get navx
navx = document.getElementById("xNav");

//define the function
function xNavHeight() {
    if (window.innerWidth > 768 && window.innerWidth < 980) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navx.style.top = "10rem";
        } else {
            navx.style.top = "38rem";
        }
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
    scrollFunction();
    xNavHeight();
};