function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/admin/login');
    }
  }
  
  
  function isAdmin(req, res, next) {
    if (req.session && req.session.admin && req.session.admin.Role === 'admin') {
      return next();
    } else {
      res.status(403).send('Access Denied');
    }
  }
  function denyAccess(req, res, next) {
    res.status(403).send('Access Denied');
  }
  
  
  module.exports = {
    isAuthenticated,
    isAdmin,
    denyAccess,
  };
  