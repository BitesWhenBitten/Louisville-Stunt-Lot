//Set the functions

function hide(element) {
    document.getElementById(element).style.display = "none";
}

function flexShow(element) {
    document.getElementById(element).style.display = "flex";
}
//Horizontal Show/Hide Function
function scrollHeightX() {
    if (scrollY > 100) { //scrolled past the other div?
        flexShow("xNav"); //reached the desired point -- show div
    } else {
        hide("xNav"); //else above the desired point -- hide div
    }

};

//Vertical Show/Hide Function
function scrollHeightY() {
    if (scrollY < 100) { //scrolled past the other div?
        flexShow("yNav"); //reached the desired point -- show div
    } else {
        hide("yNav"); //else above the desired point -- hide div
    }

};

//Event Listeners

// Dude, I tried absolutely everything except for this to be more... specific to the scroll position
setInterval(scrollHeightY, 10);
setInterval(scrollHeightX, 10);