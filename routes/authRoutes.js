const passport = require('passport');
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/', function (req, res) {
    res.send('hello world');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //muestra el id del usuario
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};


