require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var operator = process.argv[2];
var artist = process.argv.slice(3).join("%20");
var bandInTown_baseURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//console.log("the artist is " + artist);
//console.log ("query URL is: " + bandInTown_baseURL);
//https://rest.bandsintown.com/artists/yo%20la%20tengo/events?app_id=95d8b776-6be3-472e-91f1-47c6f92f3f32

if (operator === "concert-this") {
axios.get(bandInTown_baseURL).then(
  function(response) {
    // Then we print out 
    console.log("total venues are " + response.data.length);
    //console.log(response.data[0].venue);
  for (var i=0; i < response.data.length; i++) {
    console.log ("venue " + (i+1) + " is " + response.data[i].venue.name + " at the time of " + response.data[i].datetime);
  }
  }
)};


var song = process.argv.slice(3).join("%20");


if (operator === "spotify-this-song") {

  spotify.search({ type: "track", query: song}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log("the name of the song is " + song);  
  console.log("the name of the album is "+ data.tracks.items[0].album.name);
  console.log("the artist of the song " + song + " is " + data.tracks.items[0].artists[0].name); 
  });
};




//console.log(spotify);

// spotify id: 9e500fceadf3494e997df2157892d509
//https://api.spotify.com/v1/artists/{id}