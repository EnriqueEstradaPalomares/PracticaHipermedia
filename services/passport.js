const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user => {
        done(null,user);
    });
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true //pasa que no hay seguridad y el callback de google no nos acepta la solucitud, al decir el proxy, entonces necesitamos decirle que pase por el proxy de heroku para que google acepte la solicitud
    },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });
            if (existingUser) {
                done(null, existingUser);
            } else {
                //no tenemos usuarios
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);
            }
        })
);