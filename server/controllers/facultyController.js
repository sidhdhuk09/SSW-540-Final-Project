const faculty = require('../models/facultys');

const mongoose=require('mongoose');


const express=require('express');
const facultys = require('../models/facultys');
const router=express.Router();


exports.homepage=async(req,res) => {
  
        const locals=   {
            title: 'Faculty stevens',
            description: 'Faculty management system',
        }

        let on_a_single_page=15;
        let seePage=req.query.seePage || 1;


        try {
            const faculty = await facultys.aggregate([{$sort: {updatedAT:-1}}]).skip((on_a_single_page*seePage)-on_a_single_page).limit(on_a_single_page);
            const count = await facultys.countDocuments();
            res.render('admin/index', {
                locals,
                faculty, 
                current: seePage,
                pages: Math.ceil(count/on_a_single_page), 
              
            });

    
        } catch (error) {
            console.log(error);
        }
    };




    // res.render('faculty/index');

    exports.addFaculty=async(req,res) => {
  
        const locals=   {
            title: 'new fauculty member',
            description: 'Faculty management system',
        }

        res.render('admin/add',locals)
    
    };

    //push data

    exports.postFaculty=async(req,res) => {
        console.log(req.body);
    
        const newFaculty=new faculty({
            Name: req.body.Name,
            email: req.body.email,
            contactno: req.body.contactno,
            title: req.body.title,
            dept: req.body.dept,
            officehours: req.body.officehours,
            loc: req.body.loc,
            link: req.body.link,

           
        });
    
        const locals= {
            title: 'added faculty member',
            description: 'Faculty management system',
        }
    
        try {
            await newFaculty.save();
            // If you want to redirect the user to a new URL:
            res.redirect('/admin');
        } catch (error) {
            console.log(error);
            // If there was an error, render the add page again with an error message:
            locals.error = 'There was an error adding the faculty member.';
            res.render('admin/add', locals);
        }
    };



    //view faculty

    exports.viewfaculty = async (req, res) => {
        const locals = {
          title: 'view stevens faculty data',
          description: 'Faculty management system',
        };
      
        try {
          const faculty = await facultys.findById(req.params.id);
          res.render('admin/view', { locals, faculty });
        } catch (error) {
          console.log(error);
          locals.error = 'There was an error loading the faculty member.';
          res.render('admin/view', { locals });
        }
      };
      
      
//edit faculty

exports.editfaculty = async (req, res) => {
    try {
        const faculty = await facultys.findById(req.params.id);
        const locals = {
            title: 'Edit Stevens Faculty Data',
            description: 'Faculty Management System',
            faculty: facultys // pass the faculty data to the view
        };
        res.render('admin/edit', {
            locals,
            faculty

        });

    } catch (error) {
        console.log(error);
        locals.error = 'There was an error loading the faculty member.';
        res.render('admin/edit', { locals });
    }
};


//edit faculty after update
exports.editFacultyRecord = async (req, res) => {
    try {
      console.log(req.body.contactno);
      await facultys.findByIdAndUpdate(req.params.id,{
        Name: req.body.Name,
        email: req.body.email,
        contactno: req.body.contactno,
        title: req.body.title,
        dept: req.body.dept,
        officehours: req.body.officehours,
        loc: req.body.loc,
        link: req.body.link,
        updatedAT: Date.now()
      }, { new: true }); // pass the option { new: true } to return the updated document instead of the original document

      await res.redirect(`/admin/view/${req.params.id}`);
      console.log('redirected');
    } catch (error) {
      console.log(error);
    }
};


exports.deleteFaculty = async (req, res) => {
    try {
        await faculty.deleteOne({_id: req.params.id})
        res.redirect('/admin');
    } catch (error) {
      console.log(error);
    }
};


//search faculty
exports.searchFaculty = async (req, res) => {
    const locals = {
      title: 'Search Faculty',
      description: 'Faculty Management System',
    };
    try {
      if (!req.body.query || req.body.query.trim() === ' ') {
        locals.error = ' enter a valid query.';
        res.render('home/search', {
             locals 
            });
        return;
      }
  
      const query = req.body.query;
      const nospecialchars = query.replace(/\W/g, '');
      console.log(nospecialchars);
  
      const faculty = await facultys.find({
        $or: [
          { Name: { $regex: new RegExp('.*' + nospecialchars + '.*', 'i') } },
          { loc: { $regex: new RegExp('.*' + nospecialchars + '.*', 'i') } },
        ]
      });
      res.render('home/search', { locals, faculty });
    } catch (error) {
      console.log(error);
      locals.error = 'There was an error loading the faculty member.';
      res.render('home/search', { locals });
    }
  };
  


    // exports.homepage=async(req,res) => {
  
    //     const locals=   {
    //         title: 'Faculty stevens',
    //         description: 'Faculty management system',
    //     }

    //     let on_a_single_page=30;
    //     let seePage=req.query.seePage || 1;


    //     try {
    //         const faculty = await facultys.find({}).limit(30).sort({ createdAt: -1 });
    //         res.render('index',{locals,faculty});


    //     } catch (error) {
    //         console.log(error);
    //         locals.error = 'There was an error loading the faculty members.';
    //     }

    
    // };


//     try {
//         const faculty = await facultys.aggregate([{$sort: {updatedAT:-1}}]).skip((on_a_single_page*seePage)-on_a_single_page).limit(on_a_single_page);
//         const count = await facultys.countDocuments();
//         res.render('index', {
//             locals,
//             faculty, 
//             current: seePage,
//             pages: Math.ceil(count/on_a_single_page), 
          
//         });


//     } catch (error) {
//         console.log(error);
//     }
// };
