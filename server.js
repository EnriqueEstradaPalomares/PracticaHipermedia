var express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');
const authRoutes = require('./routes/authRoutes')


var app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT);

mongoose.connect(keys.mongoURL)
authRoutes(app);

//require('./routes/authRoutes.js')(app)










































/*passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    //console.log(accessToken);
    console.log('access Token', accessToken);
    console.log('refresh Token', refreshToken);
    console.log('profile:', profile);
})
);



app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));






//npm install --save express
//npm install --nodemon
//npm install --save passport-google-oauth20
//ID client: 237688805656-hcqqt40lquu60okurnc547l525ve863k.apps.googleusercontent.com
//ID Secret: Lf9wat2EtKsWcg-aDju77g0i
*/

