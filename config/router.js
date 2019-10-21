const router = require('express').Router()
const chapters = require('../controllers/chapters')

router.route('/chapters')
  .get(chapters.index)

router.route('/chapters/:id')
  .get(chapters.show)

module.exports = router
