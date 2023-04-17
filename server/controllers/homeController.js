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
            res.render('home/index', {
                locals,
                faculty, 
                current: seePage,
                pages: Math.ceil(count/on_a_single_page), 
              
            });

    
        } catch (error) {
            console.log(error);
        }
    };

    exports.searchFaculty = async (req, res) => {
        const locals = {
          title: 'Search Faculty',
          description: 'Faculty Management System',
        };
        try {
          const query = req.body.query;
      
          if (!query || query.length < 2 || query.trim() === '') {
            locals.error = 'Please enter at least 2 character.';
            res.render('home/search', { ...locals, faculty: [] });
            return;
          }
      
          const nospecialchars = query.replace(/\W/g, '');
          console.log(nospecialchars);
      
          const faculty = await facultys.find({
            $or: [
              { Name: { $regex: new RegExp('.*' + nospecialchars + '.*', 'i') } },
              { loc: { $regex: new RegExp('.*' + nospecialchars + '.*', 'i') } },
            ],
          });
      
          if (faculty.length > 0) {
            res.render('home/search', { ...locals, faculty });
          } else {
            locals.error = 'No results found. Please try again.';
            res.render('home/search', { ...locals, faculty: [] });
          }
        } catch (error) {
          console.log(error);
          locals.error = 'There was an error loading the faculty member.';
          console.log(locals.error);
          res.render('home/search', { ...locals, faculty: [] });
        }
      };
      
      
  

    exports.viewfacultyhome=async(req,res) => {
        const locals = {
          title: 'view stevens faculty data',
          description: 'Faculty management system',
        };
      
        try {
          const faculty = await facultys.findById(req.params.id);
          res.render('home/viewhome', { locals, faculty });
        } catch (error) {
          console.log(error);
          locals.error = 'There was an error loading the faculty member.';
          res.render('home/viewhome', { locals });
        }
        console.log("views home page is working");
      }


