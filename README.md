# Twitter Integration - get All tweets of a User
----
## 1 API has been created
1. API to get all tweets by a user by screen name.

----

###Installation Guide 

1. Install node using `sudo apt-get update; sudo apt-get install nodejs; sudo apt-get install npm`
2. Run `npm install`
3. Run app using `npm start`

----

####Twitter API is used for fetching data.
####Travis CI is used for CI pipeline. 
####Docker Hub is used for hosting docker image.

----
## 1. API to get all tweets by a user by screen name.

This API helps get all tweets by a user by screen name.
Pre Steps :
1. Replace screen name in controllers -> twitterConnection.js. This functionality can be extended to take username from user in REST call.
2. Replace with actual values in controllers -> twitterConnection.js

          consumer_key: "<<Enter consumer key here>>",
          consumer_secret: "<<Enter consumer secret key here>>",
          access_token_key: "<<Enter access token key here>>",
          access_token_secret: "<<Enter access token secret here>>"

API - Type : `GET` - For Local - `http://localhost:3000/tweets`

Response Body Example


          {
            [
                    'tweet text content 1',
                    'tweet text content 2',
                    'tweet text content 3'
            ]
          }
