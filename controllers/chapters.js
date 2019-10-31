const Chapter = require('../models/chapter')

function indexRoute(req, res, next){
  Chapter
    .find(req.query)
    .then(chapters => res.status(200).json(chapters))
    .catch(next)
}

function showRoute(req, res, next) {
  Chapter
    .findById(req.params.id)
    .then(chapter => {
      if(!chapter) return res.status(404).json({ message: 'no chapter here'})
      return res.status(200).json(chapter)
    })
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
