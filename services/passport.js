const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
    done(null, user.id);
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true //pasa que no hay seguridad y el callback de google no nos acepta la solucitud, al decir el proxy, entonces necesitamos decirle que pase por el proxy de heroku para que google acepte la solicitud
    },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        done(null, existingUser);
                        console.log(existingUser);
                    } else {
                        new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                        console.log("usuario creado");
                    }
                })

        })
);