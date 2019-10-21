const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
  chapter: { Number },
  choice: { String },
  text: { String },
  choices: []
})

// chapterSchema.plugin(require('mongoose_unique_validator'))

module.exports = mongoose.model('Chapter', chapterSchema)
