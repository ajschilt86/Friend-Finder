const freindsData = require("../data/friends.js");




module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(freindsData);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores
        var matchName = "";
        var matchImage = "";
        var TotalDifference = 10000;

        for (var i = 0; i < freindsData.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(freindsData[i].scores[j] - userResponses[j]);
            }
            if (diff < TotalDifference) {
                TotalDifference = diff;
                matchName = freindsData[i].name;
                matchImage = freindsData[i].photo;
            }
        }



        freindsData.push(req.body);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
        
    });
}