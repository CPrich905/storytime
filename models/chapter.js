const mongoose = require('mongoose')

//choice is the text describing the decision that leads the reader to this chapter. There may be more than one choice that leads to each chapter. IF characters are being killed off, this will need to be handled.
//text is the main text of the chapter

const chapterSchema = new mongoose.Schema({
  chapter: { type: Number, required: true },
  choice: { type: String, required: true },
  text: { type: String, required: true },
  choices: []
})

// chapterSchema.plugin(require('mongoose_unique_validator'))

module.exports = mongoose.model('Chapter', chapterSchema)
