const express = require('express')
const router = express.Router()
const TVSController = require('../controllers/tvsController')

router.get('/tvseries', TVSController.findAll)
router.get('/tvseries/:id', TVSController.findOne)
router.post('/tvseries', TVSController.postTVS)
router.put('/tvseries/:id', TVSController.editTVS)
router.delete('/tvseries/:id', TVSController.deleteTVS)

module.exports = router