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
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
// The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

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