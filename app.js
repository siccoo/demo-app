const express = require("express");
const app = express();
const port = process.env.PORT || 4000

app.use(express.static("public"));

app.set('views', './views');
app.set('view engine', 'ejs');

// "/" => "index.ejs"
app.get("/", function(req, res){
    res.render("index")
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Once upon a time", author: "Richard"},
        {title: "The Way", author: "Ikoro"},
        {title: "I Love Critics", author: "Emmanuel"},
        {title: "Adorable Bunny", author: "Christian"}
    ]
    res.render("posts", {posts: posts});
});

// "/welcome" => "Welcome to my assignment"
app.get("/welcome", function(req, res){
    res.send("Hello!!! Welcome to the assignment page")
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof!!!",
        cat: "Meow",
        catfish: "Blor..."
    }
    const animal = req.params.animal.toLowerCase();
    const sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'")
});

app.get("/repeat/:message/:times", function(req, res){
    const message = req.params.message;
    const times = Number(req.params.times);
    var result = "";

    for(let i = 0;  i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

// // "/mac" => "Mac Divine"
app.get("/mac", function(req, res){
    console.log("Someone entered a request")
    res.send("I'm Mac Divine")
})

// // "/lion" => "Roar!"
app.get("/lion", function(req, res){
    res.send("Roar!!!")
})

app.get("*", function(req, res){
    res.send("Sorry, Page not found!!! What are you doing with your life?")
})

// Tell Express to listen for requests from the App ("Starts Server").
app.listen(port, function(){
    console.log("Server is open");
})