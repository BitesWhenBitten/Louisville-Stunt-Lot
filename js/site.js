//Set the functions

function hide(element) {
    document.getElementById(element).style.display = "none";
}

function flexShow(element) {
    document.getElementById(element).style.display = "flex";
}
//Horizontal Show/Hide Function
function scrollHeightX() {
    if (scrollY > 100 || window.innerWidth > 768) { //scrolled past the other div?- Inner Width is your Breakpoint!
        flexShow("xNav"); //reached the desired point -- show div
    } else {
        hide("xNav"); //else above the desired point -- hide div
    }

};

//Vertical Show/Hide Function
function scrollHeightY() {
    if (scrollY < 100 && window.innerWidth <= 768) { //scrolled past the other div?- Inner Width is your Breakpoint!
        flexShow("yNav"); //reached the desired point -- show div
    } else {
        hide("yNav"); //else above the desired point -- hide div
    }

};




//End of Functions

setInterval(scrollHeightY, 10);
setInterval(scrollHeightX, 10);