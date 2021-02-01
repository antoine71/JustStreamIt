// Definition of the API request url.

let best_movies_url = `http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score`


// Execution of the main function.

getBestMoviesList(best_movies_url);


// This function retrieves the list of best movies based on the API request url.

function getBestMoviesList(url) {
    best_movies_page = fetchAndDecode(url);
    best_movies_page.then(value => {
        getBestMovieData(value.results[0].url);
    });
}


// This function retrieves the best movie parameters from the best movie API url.

function getBestMovieData(url) {
    best_movie_data = fetchAndDecode(url);
    best_movie_data.then(movie => {
        console.log(movie);
        displayBestMovie(movie);
    });
}


// This function updates the DOM to display the best movie parameters in the container .highlight of the HTML file.
// Once all the data are loaded, the block is displayed to the screen.

function displayBestMovie(movie) {
    let title_container = document.querySelector(".highlight .title h2");
    let summary_container = document.querySelector(".highlight .summary p");
    let image_container = document.querySelector(".highlight .image img");
    let button_container = document.querySelector(".highlight .button button");
    
    title_container.textContent = movie.title;
    summary_container.textContent = movie.long_description;
    image_container.setAttribute("src", movie.image_url);
    image_container.setAttribute("alt", movie.title);

    button_container.addEventListener("click", function() {
        displayModal(movie);
    });

    document.querySelector(".highlight").style.visibility = "visible";
}