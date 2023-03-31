const express=require('express');
const router=express.Router();
const facultyController=require('../controllers/facultyController');
const homeController=require('../controllers/homeController');

// app.get('/',(req,res)=>{
    
//     res.render('index')

// });


router.get('/',homeController.homepage);
router.get('/admin',facultyController.homepage);

router.get('/admin/add',facultyController.addFaculty);   
router.post('/admin/add',facultyController.postFaculty); 
router.get('/admin/view/:id',facultyController.viewfaculty);
router.get('/admin/edit/:id',facultyController.editfaculty);
router.put('/admin/edit/:id',facultyController.editFacultyRecord);
router.delete('/admin/edit/:id',facultyController.deleteFaculty);
router.post('/home/search',homeController.searchFaculty);
router.get('/home/viewhome/:id',homeController.viewfacultyhome);

module.exports=router;
