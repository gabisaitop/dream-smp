const {Router} = require('express')
const controller = require('./controller')

const router = Router()

//OPTION:
router.get('/get/streamer/:username',controller.getDataStreamer)
router.get('/get/streamers',controller.getDataAllStreamers)

module.exports = router