require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);


// THE APP --------------------------------------------------------
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

// FUNCTIONS -------------------------------------------------------

// SPOTIFY
function spotifyThis() {
    console.log('spotify this');
}

// DO WHAT IT SAYS
function doWhatItSays() {
    console.log('do what it says');
}

// CONCERT bands in town
function concertThis() {
    var band = process.argv[3]

    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
            function (res) {
                if (band === undefined) {
                    console.log("ya forgot to put in a band!")
                } else {
                    console.log("Next Show For " + band);
                    console.log("venue: " + res.data[0].venue.name);
                    console.log("City: " + res.data[0].venue.city);
                    console.log("Date: " + res.data[0].datetime);
                    var date = res.data[0].datetime;
                    console.log("Moment.js date: UNDEFINED" );
                }
            })
        .catch(function (err) {
            if (err.res) {
                console.log("Error", error.message);
            }
            console.log(err.config);
        });
}

// MOVIE
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