const express=require('express');
const router=express.Router();
const facultyController=require('../controllers/facultyController');


// app.get('/',(req,res)=>{
    
//     res.render('index')

// });


router.get('/',facultyController.homepage);
router.get('/add',facultyController.addFaculty);   
router.post('/add',facultyController.postFaculty); 
router.get('/view/:id',facultyController.viewfaculty);
router.get('/edit/:id',facultyController.editfaculty);
router.put('/edit/:id',facultyController.editFacultyRecord);
router.delete('/edit/:id',facultyController.deleteFaculty);

module.exports=router;
