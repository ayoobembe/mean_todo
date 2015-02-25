var express = require("express"),
    app = express()

// middleware
app.use(express.static(__dirname + '/app'))
// app.use('/js', express.static(__dirname + '/app/js'))

// routes
app.get('/', function(req, res) {
  res.sendFile("index.html")
})

app.listen(3000, function() {
  console.log("Server listening")
})
