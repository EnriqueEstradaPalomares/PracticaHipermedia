var express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')
var app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken);
})
);


app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['porfile', 'email']
    })
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);



//npm install --save express
//npm install --nodemon
//npm install --save passport-google-oauth20
//ID client: 237688805656-hcqqt40lquu60okurnc547l525ve863k.apps.googleusercontent.com
//ID Secret: Lf9wat2EtKsWcg-aDju77g0i
