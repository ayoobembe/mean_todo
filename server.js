var express = require("express"),
    app = express()

app.get('/', function(req, res) {
  res.send("Hello there :)")
})

app.listen(3000, function() {
  console.log("Server listening")
})
