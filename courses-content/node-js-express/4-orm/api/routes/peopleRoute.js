const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.filterPeopleById)
router.post('/people', PeopleController.postPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.removePeople)

module.exports = router