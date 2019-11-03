const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Chapter = require('../models/chapter')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true },  (err, db) => {
  if (err) return console.log(err)

  db.dropDatabase()

  Chapter.create([
    {
      chapter: 1,
      choice: 'Begin your journey...',
      text: 'You have a mysterious sickness. You want to go from city A to city B, where you believe there may be a cure. You are currently in an inn, and overhear a traveller talking about making the same journey. He mentions a caravan leaving for City B tomorrow, a mercenary group who will be carrying out a patrol between city A & B. He will be travelling on his own and invites you along.',
      options: [2, 3, 4]
    },
    { chapter: 2,
      choice: 'Join the solo traveller',
      text: 'You \'re attacked by bandits. You get hurt and the power is released. ',
      options: [5, 6]
    },
    { chapter: 3,
      choice: 'Join the mercenary band',
      text: 'The mercenaries are leaving in 2 days. You have 2 more days in city A',
      options: [7]
    },
    { chapter: 4,
      choice: 'Join the merchant Caravan.',
      text: 'Leave the next morning, the Caravan is attacked by bandits',
      options: [8, 9]
    },
    { chapter: 5,
      choice: 'Speak to the traveller.',
      text: 'Speak to the traveller & try to convince him you\'re not a bad person.',
      options: [10, 11, 12]
    },
    { chapter: 6,
      choice: 'Consider your options',
      text: 'Speak to the traveller & try to convince him you\'re not a bad person.',
      options: [10, 11, 12]
    },
    { chapter: 7,
      choice: 'Consider your options',
      text: 'You get mugged during your extra 2 days in City A. You\'re saved by Mercenary1. The mercenary group hears of an attack on the Caravan, and the increased bounty placed on Bandits',
      options: [13, 14]
    },
    { chapter: 8,
      choice: 'Hide',
      text: 'During the attack you hide but are captured. The bandits eventually decide to kill the captives from the Caravan & your power is released',
      options: [13, 14]
    },
    { chapter: 9,
      choice: 'Fight',
      text: 'You\'re not a very good fighter & are wounded during the fighting. Your powers are released',
      options: [6, 15]
    },
    { chapter: 10,
      choice: 'Try to convince Traveller you\'re a friend',
      text: 'You carry on your way, slowly building a bond (friendship +). You earn bed & food by magic shows/work. One night you are asked to do a show at Generous Host\'s house. Traveller thinks it\'s a bad idea.',
      options: [16,17]
    },
    { chapter: 11,
      choice: 'Try to convince Traveller you have no idea what\'s going on',
      text: 'You carry on, Traveller doesn\'t trust you. You earn bed & food by magic shows/work. One night you are asked to do a show at Generous Host\'s house. Traveller thinks it\'s a bad idea.',
      options: [18, 19]
    },
    { chapter: 12,
      choice: 'Try to convince Traveller you have no idea what\'s going on',
      text: 'Traveller goes back to town to join caravan & maybe tell the guards about you. You carry on alone, earning food & beds by magic shows/work. You are asked to do a show at Generous Host\'s house',
      options: [20, 21]
    },
    { chapter: 13,
      choice: 'You do the show for Generous Host',
      text: 'You receive reward from Generous Host but are attacked in town & release powers 13b (at the start) you begin to build up small pile of wealth following path of mercenaries for safety. 13c (at the start) you avoid the main paths & mercenaries, eventually coming to the town of Generous Host',
      options: [20]
    },
    { chapter: 14,
      choice: 'Leave with the mercenaries',
      text: 'Bandits sighted. The mercenaries have wizards with them - you are not powerful but you can cast illusions which might help with the battle',
      options: [20]
    }
  ])
    .then(chapters => console.log(`${chapters.length} chapters created`))
    .catch(err => console.log(err))
    // .finally(() => mongoose.connection.close())
})
