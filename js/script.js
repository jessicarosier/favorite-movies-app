import * as tmdbUtils from "./tmdb-utils.js";


(async () => {

    //runs on page load, displays all movies from local storage
    //makes API call to local storage to get movies, then passes each movie to renderMovie() to display on page
    await tmdbUtils.onPageLoad();

    //event listener for search input, populates movies based on search input match
    //runs on keyup, so it will run after each key press
    //holds event listener when matched movie is clicked, and passes movie to renderAddMovieModal() to display modal to allow user to add to favs and post to local storage
    tmdbUtils.movieSearchByInput();

    //event listener for genre buttons, populates movies based on genre
    tmdbUtils.displayActionMovies();
    tmdbUtils.displayAdventureMovies();
    tmdbUtils.displayComedyMovies();
    tmdbUtils.displayHorrorMovies();
    tmdbUtils.displayRomanceMovies();
    tmdbUtils.displayDocumentaryMovies();
    tmdbUtils.displayAllMovies();


})();

