const { default: mongoose } = require('mongoose');
const Admins = require('../models/admins');

exports.getLogin = async (req, res) => {
    console.log('Connected to admin login page', mongoose.connection.name);
    const adminCount = await Admins.countDocuments();
    console.log('Number of admins:', adminCount);
    res.render('admin/login');
};


exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
  
    console.log('Client username:', username);
    console.log('Client password:', password);

    try {
        const admin = await Admins.findOne({ Username: username });
        console.log('Admin from database:', admin);

        if (!admin) {
            return res.status(401).send('Invalid username or password');
        }

        if (admin.Password === password) {
            req.session.admin = admin;
            res.redirect('/admin');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).send('Internal Server Error');
    }
};

