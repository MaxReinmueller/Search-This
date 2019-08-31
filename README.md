# liri-node-app

## Overview
Run searches to find out more about your favorite songs, movies, bands, and more!

Link to deployed version - https://github.com/MaxReinmueller/liri-node-app

## Organization
  * The app is ran in node and accessed throught the command line. 
  * Specific API's are used to access data.
  * javascript functions and node packages are used to organize the data that is output to the user.

## Instructions
  1. Download the app from Github and store the folder on your computer.
  1. Using your terminal and the "cd" command, navagate to the folder you downloaded.
  1. Once in the folder, type in: node liri.js "the-command-you-want-to-use" "what-you-want-to-look-up"
  
   * IMPORTANT: if your search has spaces, make sure to wrap your text in quotes. example: node liri.js concert-this "the rolling stones"
      
## Command examples
  * **movie-this**
  *look up any movie to learn more about the film or decide what to watch.
  
  ![movie-this](https://github.com/MaxReinmueller/liri-node-app/blob/master/img/rocky.jpg)

  * **spotify-this**
  *search for any song to learn more about the album its on and the artist it's by.
 
  ![spotify-this](https://github.com/MaxReinmueller/liri-node-app/blob/master/img/eye_of_the_tiger.jpg)

  * **concert-this**
  *find out about a bands upcoming show so you don't miss out!
   
  ![concert-this](https://github.com/MaxReinmueller/liri-node-app/blob/master/img/rolling_stones.jpg)

  * **do-what-it-says**
  *run the command to find a hidden search!
    
  ![spotify-this](https://github.com/MaxReinmueller/liri-node-app/blob/master/img/do_what_it_says.jpg)
      
## My roll development
The concept for the app was provided by Trilogy. I developed the concept by writing scripts to utilze API's and output the user's requested information to their terimal.

I included libraries and node packages to reduce development time.

### Technologies used
 * Javascript
   * libraries
     * moment.js - https://momentjs.com/
     * jquery - https://code.jquery.com/
   * node
     * npm's
       * FS (internal node package)
       * keys - (internal node package)
       * node-spotify-api - https://www.npmjs.com/package/node-spotify-api
       * axios - https://www.npmjs.com/package/axios
       * dotenv - https://www.npmjs.com/package/dotenv
 * API's
   * Bands in Town - https://manager.bandsintown.com/support/bandsintown-api
   * Spotify - https://developer.spotify.com/documentation/web-api/
   * OMDB - http://www.omdbapi.com/
