const usersController = {};

const passport = require('passport');
const User = require('../models/User');

usersController.renderRegister = (req, res) => {
    res.render('users/create');
}

usersController.register = async(req, res) => {
    const errors = [];
    const { firstname, lastname, idcard, email, password, confirm } = req.body;
    if ((password.length === 0) || (password.length === 0)) {
        errors.push({ text: 'Las contraseñas no pueden estar en blanco' });
    }
    if (password != confirm) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }
    if (password.length < 6) {
        errors.push({ text: 'La contraseña es menor de 6 caracteres' });
    }
    if (errors.length > 0) {
        res.render('users/create', {
            errors,
            firstname,
            lastname,
            email
        });
    } else {
        const emailUser = await User.findOne({ email });
        if (emailUser) {
            req.flash('error_message', 'El correo electrónico está en uso');
            res.redirect('/register');
        } else {
            const newUser = new User({ firstname, lastname, idcard, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_message', 'Usuario creado satisfactoriamente');
            res.redirect('/login');
        }
    }
}

usersController.renderLogin = (req, res) => {
    res.render('users/login');
}

usersController.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/welcome',
    failureFlash: true
});

usersController.renderWelcome = (req, res) => {
    res.render('users/welcome');
}

usersController.logout = (req, res) => {
    req.logout();
    req.flash('success_message', 'Tu sesión ha sido cerrada');
    res.redirect('/');
}

module.exports = usersController;