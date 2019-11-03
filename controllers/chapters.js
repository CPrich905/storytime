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

function findChoice(req, res) {
  Chapter
    .findOne( { chapter: req.params.query })
    .then(chapter => {
      if (!chapter) throw new Error('Not found')
      return res.status(200).json(chapter)
    })
    .catch(err => console.log(err))
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  find: findChoice
}
