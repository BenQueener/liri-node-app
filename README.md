# liri-node-app
LiriBot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

##LIRI has three functions##
    * search Spotify by song title
    * search for concerts by band name
    * search for movies by title

##Liri function breakdown

###concert-this
example: 'node liri concert-this slayer'
When Liri searches using concert-this it will use the Bands in Town Artist Events API to return the following information.
    * Name of the venue
    * Venue location
    * Date of the Event

###spotify-this-song
example: 'node liri spotify-this-song Genesis'
When Liri searches using spotify-this-song it will use the Spotify API to return the following information.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

###movie-this
example: 'node liri movie-this Braveheart'
When Liri searches using movie-this it will use the Axios package to retrieve data from the OMDB API and return the following information
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

###do-what-it-says
example: 'node liri do-what-it-says'
When Liri used the do-What-it-says it will use the fs node package to read the 'random.txt" file and carry out the function in the file.