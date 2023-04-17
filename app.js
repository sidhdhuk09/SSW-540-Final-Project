const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');

const expresslayouts = require('express-ejs-layouts');
//const {flash} = require('express-flash-message');
const session = require('express-session');
const connectDB = require('./server/config/database');
const port=process.env.port||9000;
connectDB();
app.use(express.urlencoded({extended:true}));
app.use(expresslayouts);
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('layout','./layouts/main');
app.set('view engine','ejs');
const admins=require('./server/routes/admins');
    


app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      }
    })
  );
// app.get('/',(req,res)=>{
// const locals=   {
//     title: 'Faculty stevens',
//     description: 'Faculty management system',
// }
// res.render('index',locals);
// });
// app.get('/',(req,res)=>{
    
//     res.render('index')

// });


//routes
app.use('/',require('./server/routes/faculty'));
app.use('/admin',require('./server/routes/admins'));

app.get('*', (req, res) => {
    res.status(404).render('error');
    });



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

