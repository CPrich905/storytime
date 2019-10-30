const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Chapter = require('../models/chapter')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true },  (err, db) => {
  if (err) return console.log(err)

  db.dropDatabase()

  Chapter.create([
    {
      chapter: 1,
      choice: 'this is chapter choice text (shown on previous chapter)',
      text: 'This is chapter 1 main texty text text',
      choices: [2, 3, 4]
    },
    { chapter: 2,
      choice: 'chapter 2 choice',
      text: 'This is chapter 2 main texty text text',
      choices: [3, 4]
    },
    { chapter: 3,
      choice: 'chapter 2 choice',
      text: 'This is chapter 2 main texty text text',
      choices: [1, 4]
    },
    { chapter: 4,
      choice: 'chapter 2 choice',
      text: 'This is chapter 2 main texty text text',
      choices: [1, 2]
    }
  ])
    .then(chapters => console.log(`${chapters.length} chapters created`))
    .catch(err => console.log(err))
    // .finally(() => mongoose.connection.close())
})
