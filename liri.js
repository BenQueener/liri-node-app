require("dotenv").config();
var keys = require("./keys.js");
var Spotify =  require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");

//concert-this
function concertThis(artistName) {
    var artistQueryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    //get the information from bandsintown using axios
    axios.get(artistQueryURL).then(
        function (response) {
            console.log("Name of Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country );
            console.log("Date of the event: " + response.data[0].datetime);
            //logs to a file
         //   fs.appendFile('log.txt', '\n' + response.data[0].venue.name);
           // fs.appendFile('log.txt', '\n' + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country );
           // fs.appendFile('log.txt', '\n' +  response.data[0].datatime);
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
            console.log('Error: ' + error);
            return;
        } 
        else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[3].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
            //save in file
          //  fs.appendFile('log.txt', '\n' + "Artist: " + data.tracks.items[0].artists[0].name);
            //fs.appendFile('log.txt', '\n' + "Song: " + data.tracks.items[0].name);
           // fs.appendFile('log.txt', '\n' + "Preview Link: " + data.tracks.items[3].preview_url);
           // fs.appendFile('log.txt', '\n' + "Album: " + data.tracks.items[0].album.name);
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
            //logs information in file
            // fs.appendFile('log.txt', '\n' + "Title: " + response.data.Title);
            // fs.appendFile('log.txt', '\n' + "Release Year: " + response.data.Year);
            // fs.appendFile('log.txt', '\n' + "IMDB Rating: " + response.data.imdbRating);
            // fs.appendFile('log.txt', '\n' + "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            // fs.appendFile('log.txt', '\n' + "Country Produced: " + response.data.Country);
            // fs.appendFile('log.txt', '\n' + "Language: " + response.data.Language);
            // fs.appendFile('log.txt', '\n' + "Plot: " + response.data.Plot);
            // fs.appendFile('log.txt', '\n' + "Plot: " + response.data.Plot);
            // fs.appendFile('log.txt', '\n' + "Actors/Actresses: " + response.data.Actors);
        }
    );
}

//do-what-it-says
function doWhatItSays(){
    fs.readFile('random.txt', "utf8", function(error, data){
        var text = data.split(',');
        somethingThis( text[0],text[1]);
    });
}

//This function is called to choose which kind of function to choose based on arguments passed to it
function somethingThis(choose, query) {
    //if statements to choose the funtion
    if (choose === "concert-this"){
        concertThis(query); 
    }
    else if (choose === "spotify-this-song"){
        spotifyThisSong(query);
    }
    else if (choose === "movie-this"){
        movieThis(query);
    }
    else if (choose === "do-what-it-says"){
        doWhatItSays(query);
    }
    else {
        console.log("Not sure what you are trying to do here, buddy.")
    }
}


//pick out the arguments from the command line then choose what function
var chooseThis = process.argv[2];
var queryThis = process.argv[3];
somethingThis(chooseThis, queryThis);

