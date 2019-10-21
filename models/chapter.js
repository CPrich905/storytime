const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
  chapter: { type: Number, required: true },
  choice: { type: String, required: true },
  text: { type: String, required: true },
  choices: []
})

// chapterSchema.plugin(require('mongoose_unique_validator'))

module.exports = mongoose.model('Chapter', chapterSchema)
