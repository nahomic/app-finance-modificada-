const express = require('express');
const router = express.Router();

const CustomerController = require('../controllers/CustomerController');

router.get('/list',CustomerController.list);
router.post('/create',CustomerController.create);
router.get('/get/:id', CustomerController.get);
router.post('/update/:id',CustomerController.update);
router.post('/delete',CustomerController.delete);
// router.get('/datatest', CustomerController.testdata);
// router.get('/test',CustomerController.test);
// router.get('save',(req, res)=> {
//      res.json({status:"customer saved"});
// })

module.exports = router;



