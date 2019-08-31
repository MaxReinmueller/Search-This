export function logic(){

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

}