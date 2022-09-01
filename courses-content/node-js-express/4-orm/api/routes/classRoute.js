const { Router } = require('express')
const ClassController = require('../controllers/ClassController')

const router = Router()

router.get('/class', ClassController.getAllClasses)
router.get('/class/:id', ClassController.filterClassById)
router.post('/class', ClassController.postClass)
router.put('/class/:id', ClassController.updateClass)
router.delete('/class/:id', ClassController.removeClass)

module.exports = router