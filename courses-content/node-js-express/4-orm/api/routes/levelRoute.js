const { Router } = require('express')
const LevelController = require('../controllers/LevelController')

const router = Router()

router.get('/level', LevelController.getAllLevel)
router.get('/level/:id', LevelController.filterLevelById)
router.post('/level', LevelController.postLevel)
router.put('/level/:id', LevelController.updateLevel)
router.delete('/level/:id', LevelController.removeLevel)

module.exports = router