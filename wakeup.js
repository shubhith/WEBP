var https = require("https");

setInterval(function() {
  https.get("https://honeythakuria.herokuapp.com/");
 // console.log("Pinging");
}, 300000);
