const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.filterPeopleById)
router.post('/people', PeopleController.postPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.removePeople)
// enrollments routes
router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.filterPeopleByEnrollment)
router.post('/people/:studentId/enrollment', PeopleController.postEnrollments)
router.put('/people/:studentId/enrollment/:enrollmentId', PeopleController.updateEnrollments)
router.delete('/people/:studentId/enrollment/:enrollmentId', PeopleController.removeEnrollments)

module.exports = router