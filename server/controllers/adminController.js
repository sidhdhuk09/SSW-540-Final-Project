const { default: mongoose } = require('mongoose');
const Admins = require('../models/admins');

exports.getLogin = async (req, res) => {
    console.log('Connected to admin login page', mongoose.connection.name);
    const adminCount = await Admins.countDocuments();
    console.log('Number of admins:', adminCount);
    console.log(req.session)
    if(req.session.admin !== undefined){
        res.redirect('/admin');
    }
    else
    {
        res.render('admin/login', { error: null });
    }
    
};


exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    console.log('Client username:', username);
    console.log('Client password:', password);

    try {
        const admin = await Admins.findOne({ Username: username });
        console.log('Admin from database:', admin);

        if (!admin || admin.Password !== password) {
            return res.render('admin/login', 
            { error: 'Invalid username or password' });
        }
        
        req.session.admin = admin;
        
        res.redirect('/admin');
    } catch (error) 
    {
        console.error('Error during admin login:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.getLogout = async (req, res) => {
    console.log('Connected to admin login page', mongoose.connection.name);
    const adminCount = await Admins.countDocuments();
    console.log('Number of admins:', adminCount);
    req.session.destroy();
    console.log(req.session)
    res.redirect('/admin/login');
    
};