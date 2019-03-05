var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: "<<Enter consumer key here>>",
  consumer_secret: "<<Enter consumer secret key here>>",
  access_token_key: "<<Enter access token key here>>",
  access_token_secret: "<<Enter access token secret here>>"
});

exports.connection_getAll = function(req, res) {
  client.get(
    "statuses/user_timeline",
    { screen_name: "abhi_loves_you", count: 200 },
    function(error, tweets, response) {
      if (!error) {
        //console.log("4545");
        var tweet = [];
        for (i = 0; i < tweets.length; i++) {
          //console.log(tweets[i]["text"]);
          tweet.push("tweet text " + tweets[i]["text"]);
        }
        res.status(200).json({ tweets: tweet });
      } else {
        res.status(500).json({ error: error });
      }
    }
  );
};
