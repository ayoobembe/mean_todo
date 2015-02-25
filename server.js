var express = require("express"),
    app = express()

// middleware
app.use(express.static(__dirname + '/app'))

// routes
app.get('/', function(req, res) {
  res.sendFile("index.html")
})

app.listen(3000, function() {
  console.log("Server listening")
})
