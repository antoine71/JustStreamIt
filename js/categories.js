// This file manages the function and script required to display infomations of the best movies 
//of the selected categories


//Definition of variables

let categories = ["", "drama", "comedy", "horror"];
let categories_urls = get_categories_urls(categories, 2);
let movies_articles = document.querySelectorAll(".movies");


// This script call the functions to retrieve the movies data and populate the DOM for each category

for (let i = 0; i <=3; i++) {

    let category_urls = categories_urls[i];
    let movie_article = movies_articles[i];

    let page1 = fetchAndDecode(category_urls[0]);
    let page2 = fetchAndDecode(category_urls[1]);

    Promise.all([page1, page2]).then(values => {
        let movies_urls = [];
        for (value of values) {
            for (movie of value.results) {
                movies_urls.push(movie.url);
            };
        };
        getMovies(movies_urls, movie_article);
    });
}


// This functions returns an url that is used to get a category data from the API

function get_category_urls(category, nb_of_pages) {
    let urls = [];
    for (let i = 1; i <= nb_of_pages; i++) {    
        var url =  `http://localhost:8000/api/v1/titles/?format=json&genre=${category}&page=${i}&sort_by=-imdb_score`;
        urls.push(url);
    }
    return urls;
};


// This function return a list of urls from a list of categories

function get_categories_urls(categories, nb_of_pages) {
    urls = [];
    for (let category of categories) {
        urls.push(get_category_urls(category, nb_of_pages));
    }
    return urls;
}


// This function retrieves the list of movies based on the API request urls.

function getMovies(movies_urls, movie_article) {
    movies_promises = []
    for (url of movies_urls) {
        movies_promises.push(fetchAndDecode(url));
    };
    Promise.all(movies_promises).then(movies => {
        displayMovies(movies, movie_article);
        setModal(movies);
    });
};


// This function updates the DOM to display the movie images in the carousels.
// Once all the data are loaded, the block is displayed to the screen.

function displayMovies(movies, movie_article) {
    article = movie_article;
    let i = 0;
    for (image of article.querySelectorAll(".movie_picture img")) {
        image.setAttribute("src", movies[i].image_url);
        image.setAttribute("alt", movies[i].title);
        i += 1;
    };
    movie_article.style.visibility = "visible";
};


// This function sets the call of the modal window if a movie picture is clicked.

function setModal(movies) {
    let i = 0;
    for (image of article.querySelectorAll(".movie_picture img")) {
        image.addEventListener("click", function(e, j=i, movie=movies[i]) {
            displayModal(movies[Number(e.target.className)]);
        });
        i += 1;
    };
};