const freindsData = require("../data/friends.js");




module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        return res.json(freindsData);
    });


    // app.post("/api/friends", function (req, res) {

    //     var newFriends = req.body;


    //     newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

    //     console.log(newFriends);

    //     characters.push(newFriends);

    //     res.json(newFriends);
    // });



    app.post("/api/friends", function (req, res) {
        freindsData.push(req.body);
        res.json(true);

    });

}