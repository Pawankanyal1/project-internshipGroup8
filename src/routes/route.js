const express = require('express');

const collegeController = require('../controllers/collegeController')
const internController = require('../controllers/internController')

const router = express.Router();



router.post('/colleges', collegeController.createCollege)

router.get('/collegeDetails',collegeController.collegeDetails)


router.post('/interns',internController.createIntern)

module.exports =router;