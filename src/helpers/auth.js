const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
    req.flash('error_message', 'Usted no está autorizado para realizar esta acción');
}

module.exports = helpers;