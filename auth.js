const db = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res, next) => {
  console.log('inside log out function', req.session.auth)
  delete req.session.auth;
  next();
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {

    return res.redirect('/users/login');
  }
  return next();
};

const restoreUser = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.
  // console.log(req.session);
  console.log('locals before if block 127??????????????????????????????', res.locals.authenticated)

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        console.log('LOGGED===IN--=========r',res.locals.authenticated)
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;

      console.log('LOGGED===OUT=========r',res.locals.authenticated)
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};
module.exports = {
    loginUser,
    logoutUser,
    requireAuth,
    restoreUser,
}
