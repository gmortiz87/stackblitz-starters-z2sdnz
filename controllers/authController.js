const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.login = async (req, res) => {
    if (req.method === 'GET') {
        res.render('login');
    } else {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            return res.redirect('/reports');
        }
        res.render('login', { error: 'Credenciales inválidas' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => res.redirect('/'));
};
