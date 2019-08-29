var express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var app = express();

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 3000;
app.listen(PORT);



//npm install --save express
//npm install --nodemon
//npm install --save passport-google-oauth20

