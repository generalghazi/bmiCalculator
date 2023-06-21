const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse data that comes from a HTML form
app.use(bodyParser.urlencoded({extended:true}));

// get html from file path of current file
app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// handle post request that comes to home route
app.post("/", function(req,res){

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = Math.round(weight/(height*height)).toFixed(1);

    if (bmi < 18.5){
        res.send("Your BMI is: " + bmi + ". You are underweight.");
    }

    else if (bmi <= 24.9){
        res.send("Your BMI is: " + bmi + ". You are normal.");
    }

    else {
        res.send("Your BMI is: " + bmi + ". You are overweight.");
    }

    
})

// server to listen for req
app.listen(3000, function(){
    console.log("Server started on port 3000");
});