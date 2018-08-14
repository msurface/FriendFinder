// Load friends data into the page
var friendsArray = require("../data/friends");
// dependencies
var express = require('express');
var router = express.Router();

 // Getting user Array
    router.get("api/friends", function(req, res) {
        res.json(friendsData);
    });

    // setting up the api post
    router.post("/api/tables", function(req, res) {

        var score = req.body.score.map(function(x){return parseInt(x,10)}).reduce(add);
        function add(a, b) {
            return a + b;
        }
        
        // push the created array to friends array
        friendsArray.push(req.body);

        // an array to store the difference from you and all other users
        var diffArr = [];

        /*Setting up a loop to cycle users array, calculate the total score and get the 
        difference betwen my score and user scores */
        for(var i = 0; i < friendsArray.length; i++) {
            var userScores = friendsArray[i].score.map(function(x){return parseInt(x,10)}).reduce(add);
            var difference = Math.abs(yourScore - usersScores);
            diffArr.push(dirrerence);
        }

        var indexOfSmallest = 0;
        var value = diffArr[0];
        // loop through diffArr and finds the index of the smallest number
        for(var k = 0; k < diffArr.length; k++) {
            if(diffArr[k] < value) {
                value = diffArr[k];
                indexOfSmallest = k;
            }
        }
        // send the match with the smallest difference
        res.send(friendsArray[indexOfSmallest]);
    });

    module.exports = router;