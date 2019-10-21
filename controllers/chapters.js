const Chapter = require('../models/chapter')

function indexRoute(req, res){
  Chapter
    .find(req.query)
    .then(chapters => res.status(200).json(chapters))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  Chapter
    .findById('/activities/:id')
    .then(chapter => {
      if(!chapter) return res.status(404).json({ message: 'no chapter here'})
      return res.status(200).json(chapter)
    })
    .catch(err => res.status(404).json(err))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
