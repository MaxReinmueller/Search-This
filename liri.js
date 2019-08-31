require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require("fs");

var userCommand = process.argv[2];
var input = process.argv[3];

function theApp(){

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
};
theApp();

// DO WHAT IT SAYS
// reads a text file an use it to call a liri command
function doWhatItSays() {
    input = input

    // looks at the text file
    fs.readFile("random.txt","utf8", function(err, data) {
        if (err) {
        return console.log(err)
        } 
            var theArray = data.split(",")
            var cmd = theArray[0];
            var input = theArray[1];
            
            if (cmd === "movie-this") {movieThis()}
            if (cmd === "concert-this") {concertThis()}
            if (cmd === "spotify-this") {spotifyThis()}
});
}

// MOVIE
function movieThis() {
    input = input

    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                if (input === undefined) {
                    console.log("If you haven't watched Mr. Nobody, then you should!");
                    console.log("http://www.imdb.com/title/tt0485947/");
                } else {
                    console.log("--------------------------");
                    console.log("TITLE: " + response.data.Title + 
				"\nYEAR PRODUCED: " + response.data.Year + 
				"\nIMDB RATING: " + response.data.imdbRating + 
				"\nROTTEN TOMATOES RATING: " + response.data.Ratings[1].Value + 
				"\nPRODUCED IN: " + response.data.Country + 
				"\nLANGUAGE: " + response.data.Language + 
				"\nPLOT: " + response.data.Plot + 
				"\nACTORS: " + response.data.Actors);
                }
            })
        .catch(function (error) {
            if (error.response) {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// SPOTIFY
function spotifyThis() {
    var spotify = new Spotify(keys.spotify);
    input = input

    if(input === undefined){
        input = "the sign ace of base";
    }

    spotify.search({ type: 'track', query: input,  limit: 1}, function(err, res) {
	    if (res) { 

           var data = res.tracks.items[0];
                        
             console.log(
                "\nArtists: " + data.artists[0].name + 
                "\nSong: " + input +
                 "\nLink: " + data.href +
                 "\nAlbum: " + data.album.name
             );


        } else
        {console.log('Error: ' + err);}
	
	});
}

// CONCERT bands in town
function concertThis() {
    input = input

    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
            function (res) {
                if (input === undefined) {
                    console.log("ya forgot to put in a band!")
                } else {
                    var date = res.data[0].datetime;
                    console.log("--------------------------" + 
                    "\nNext Show For " + input + 
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
