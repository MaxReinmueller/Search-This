require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require('moment');
var Spotify = require('node-spotify-api');

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
    var spotify = new Spotify(keys.spotify);
    var songName = process.argv[3]

    if(songName === undefined){
        songName = "the sign ace of base";
    }

    spotify.search({ type: 'track', query: songName,  limit: 1}, function(err, res) {
	    if (res) { 

           var data = res.tracks.items[0];
                        
             console.log(
                "\nArtists: " + data.artists[0].name + 
                "\nSong: " + songName +
                 "\nLink: " + data.href +
                 "\nAlbum: " + data.album.name
             );


        } else
        {console.log('Error: ' + err);}
	
	});
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
                    var date = res.data[0].datetime;
                    console.log("--------------------------" + 
                    "\nNext Show For " + band + 
                    "\nvenue: " + res.data[0].venue.name +
                    "\nCity: " + res.data[0].venue.city + 
                    "\nDate: " + moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));
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