require("dotenv").config();
var keys = require("./keys.js");
var Spotify =  require("node-spotify-api");
var axios = require("axios");

//concert-this
function concertThis(artistName) {
    var artistQueryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    //get the information from bandsintown using axios
    axios.get(artistQueryURL).then(
        function (response) {
            console.log("Name of Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country );
            console.log("Date of the event: " + response.data[0].datatime);
        }
    )
} 


//spotify-this-song
var spotify = new Spotify(keys.spotify);

function spotifyThisSong(songName) {

    if (songName === undefined) {
        searchName = "The Sign ace of base";
    }
  
    spotify.search({
        type: 'track',
        query: songName
    }, function(error, data) {
        if (error) {
            logIt('Error: ' + error);
            return;
        } 
        else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[3].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        }
    });
  };

//movie-this
function movieThis(movieName) {

    if (movieName === undefined) {
        movieName = "Mr. Nobody";
    } 
  
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors/Actresses: " + response.data.Actors);
        });

//do-what-it-says
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.

// choose what function
var choose = process.argv[2];
var query = process.argv[3];

//if statements to choose the funtion
if (choose === "concert-this"){
    concertThis(query); 
}
else if (choose === "spotify-this-song"){
    spotifyThisSong(query);
}
else if (choose === "movies-this"){
    movieThis(query);
}
else if (choose === "do-what-it-says"){
    doWhatItSays(query);
}














// BONUS
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

// Make sure you append each command you run to the log.txt file.

// Do not overwrite your file each time you run a command.