// This file manages the functions and scripts required to animate the carousel.


//Definition of variables

let arrows_right = document.getElementsByClassName("arrow right");
let arrows_left = document.getElementsByClassName("arrow left");
let movies_lists = document.getElementsByClassName("movies_list");
let positions = [0, 0, 0, 0];
let desktop = window.matchMedia("(min-width: 40em)");


// This script allows to modify the value of the style translate of the carousel when the arrows are clicked.
// The modification of translate will trigger the CSS animation.

for (let i = 0; i <= 3; i++) {

    let arrow_left = arrows_left[i];
    let arrow_right = arrows_right[i];
    let movies_list = movies_lists[i];
    let position = positions[i];
    
    arrow_right.onclick = function() {
        
        position = Math.max(minPosition(), position - 1);
        setArrowVisibility(position, arrow_left, arrow_right);
        var translate = "translate(" + (1 / 7) * 100 * position + "%)"
        movies_list.style.transform = translate;
        console.log("right");
    }

    arrow_left.onclick = function() {
        position = Math.min(0, position + 1);
        setArrowVisibility(position, arrow_left, arrow_right);
        var translate = "translate(" + (1 / 7) * 100 * position + "%)"
        movies_list.style.transform = translate;
        console.log("left");
    }
}


// This function hide or show the arrow depending on the position of the carousel

function setArrowVisibility(position, arrow_left, arrow_right) {
    if (position === 0) {
        arrow_left.style.visibility = "hidden"
    } else {
        arrow_left.style.visibility = "visible" 
    }
    if (position === minPosition()) {
        arrow_right.style.visibility = "hidden"
    } else {
        arrow_right.style.visibility = "visible" 
    }
}


// This function defines the minimmum position of the carousel depending on the media on which the site is displayed

function minPosition() {
    let minPosition;
    if (desktop.matches) {
        minPosition = -3;
    } else {
        minPosition = -6;
    }
    return minPosition;
}