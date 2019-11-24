require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var operator = process.argv[2];
var artist = process.argv.slice(3).join("%20");
var bandInTown_baseURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
console.log("the artist is " + artist);
console.log ("query URL is: " + bandInTown_baseURL);

//https://rest.bandsintown.com/artists/yo%20la%20tengo/events?app_id=95d8b776-6be3-472e-91f1-47c6f92f3f32

if (operator === "concert-this") {
axios.get(bandInTown_baseURL).then(
  function(response) {
    // Then we print out the imdbRating
    console.log(response);
  }
)};



// spotify id: 9e500fceadf3494e997df2157892d509
//https://api.spotify.com/v1/artists/{id}