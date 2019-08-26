require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];

switch (userCommand) {
    case "movie-this":
        movieThis();
        break;

    case "concert-this":
        concertThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    case "spotify-this":
        spotifyThis();
        break;
}


// CONCERT THIS
function concertThis() {
    console.log('concert');
}

// DO WHAT IT SAYS
function doWhatItSays() {
    console.log('do what it says');
}


// SPOTIFY THIS
function spotifyThis() {
    console.log('spotify this');
}


// MOVIE THIS
function movieThis() {
    movie = process.argv[3];

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                if (movie === undefined) {
                    console.log("If you haven't watched Mr. Nobody, then you should!");
                    console.log("http://www.imdb.com/title/tt0485947/");
                } else {
                    console.log("--------------------------");
                    console.log("TITLE: " + response.data.Title);
                    console.log("YEAR PRODUCED: " + response.data.Year);
                    console.log("IMDB RATING: " + response.data.imdbRating);
                    console.log("ROTTEN TOMATOES RATING: " + response.data.Ratings[1].Value);
                    console.log("PRODUCED IN: " + response.data.Country);
                    console.log("LANGUAGE: " + response.data.Language);
                    console.log("PLOT: " + response.data.Plot);
                    console.log("ACTORS: " + response.data.Actors);
                }
            })
        .catch(function (error) {
            if (error.response) {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}