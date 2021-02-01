let arrows_right = document.getElementsByClassName("arrow right");
let arrows_left = document.getElementsByClassName("arrow left");
let movies_lists = document.getElementsByClassName("movies_list");
let positions = [0, 0, 0, 0];
let desktop = window.matchMedia("(min-width: 40em)");

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

function minPosition() {
    let minPosition;
    if (desktop.matches) {
        minPosition = -3;
    } else {
        minPosition = -6;
    }
    return minPosition;
}