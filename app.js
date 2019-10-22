// AnimeApp

var express = require("express"),
    app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// Home
app.get("/", function(req, res){
    res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("AnimeApp Server is now running.");
});