// This file manages the functions required to display modal window and associated movie information


// This function populate the DOM with the movie informations, the displays the modal window

function displayModal(movie) {
    let modal = document.getElementById("myModal");
    
    image = document.querySelector("#modal_image img");
    image.setAttribute("src", movie.image_url);
    image.setAttribute("alt", movie.title);

    document.querySelector("#title h3").textContent = movie.title;
    
    document.querySelectorAll("#movie_parameters ul li")[0].textContent = turnArrayToString(movie.genres);
    document.querySelectorAll("#movie_parameters ul li")[1].textContent = turnArrayToString(movie.countries);
    document.querySelectorAll("#movie_parameters ul li")[2].textContent = `${movie.duration} min`;
    document.querySelectorAll("#movie_parameters ul li")[3].textContent = formatDate(movie.date_published);

    document.querySelector("#summary p").textContent = movie.long_description;

    document.querySelectorAll("#cast ul li")[0].textContent = `Réalisateur: ${turnArrayToString(movie.directors)}`;
    document.querySelectorAll("#cast ul li")[1].textContent = `Acteurs: ${turnArrayToString(movie.actors)}`;

    document.querySelectorAll("#ratings ul li")[0].textContent = `Votes: ${movie.avg_vote}/10`;
    document.querySelectorAll("#ratings ul li")[1].textContent = `Imdb: ${movie.imdb_score}/10`;
    document.querySelectorAll("#ratings ul li")[2].textContent = movie.worldwide_gross_income;

    modal.style.display = "block";

    let cross = document.querySelector("#cross img");
    cross.addEventListener("click", function() {
        modal.style.display = "none";

    });
};


// This function turns an array into a string, each element separated by a coma and a space.

function turnArrayToString(array) {
    string = "";
    for (item of array) {
        if (string === "") {
            string = item;
        } else {
        string = `${string}, ${item}`;
        }
    }
    return string;
}

// This function changes the format of the date from US to FR.

function formatDate(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    new_date = day + "/" + month + "/" + year;
    return new_date
}