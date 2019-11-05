const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Chapter = require('../models/chapter')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true },  (err, db) => {
  if (err) return console.log(err)

  db.dropDatabase()

  Chapter.create([
    //Chapter 1 & initial choices of travelling companions.
    {
      chapter: 1,
      choice: 'Begin your journey...',
      text: 'You have a mysterious sickness. You want to go from city A to city B, where you believe there may be a cure. You are currently in an inn, and overhear a traveller talking about making the same journey. He mentions a caravan leaving for City B tomorrow, a mercenary group who will be carrying out a patrol between city A & B. He will be travelling on his own and invites you along.',
      options: [2, 3, 4]
    },
    // TRAVELLER ROUTE, you set off with traveller (1) and after a couple of days you are attacked & the power is released. Decisions: kill bandits & spare the traveller (5) OR kill bandits & traveller (9)
    { chapter: 2,
      choice: 'Join the solo traveller',
      text: 'You \'re attacked by bandits. You get hurt and the power is released.',
      options: [5, 8]
    },
    // !MERCENARY ROUTE,  2 more days in City A. You have a choice to travel with them(11) or follow along the next day (14)SOLO ROUTE(clean conscience)
    { chapter: 3,
      choice: 'Join the mercenary band',
      text: 'The mercenaries are leaving in 4 days. You have 4 more days in city A. You\'re attacked one night in an alley and protected by SOLDIER. The night before they leave, news comes in that the caravan has been attacked. The mercenaries warn you that they will be travelling fast & you might be asked to help.',
      options: [11, 14]
    },
    // CARAVAN ROUTE, you travel with the caravan and are attacked. Choose to Hide(12) or Fight(13)
    { chapter: 4,
      choice: 'Join the merchant Caravan.',
      text: 'Leave the next morning, the Caravan is attacked by bandits',
      options: [10, 11]
    },
    // TRAVELLER ROUTE, You decided to spare the traveller after the initial attack & now must make your decision (5): convince him you're a friend(6)TRAVELLER, try and convince him you have no idea what's going on but that you should stay together (7)TRAVELLER, try and convince him you have no idea what's going on but that he should go his own way (8)OLO ROUTE(clean conscience), kill the traveller & carry on (9)SOLO ROUTE(dead TRAVELLER), kill the TRAVELLER & return to City A (10)GUARDED CARAVAN.
    { chapter: 5,
      choice: 'You spared the traveller.',
      text: 'Traveller suspects the weird power has something to do with you & challenges you.',
      options: [6, 7, 8, 9, 10]
    },
    { chapter: 6,
      choice: 'Convince him you\'re a friend',
      text: 'Speak to the traveller & try to convince him you are a good person with a nasty affliction & push on together. You carry on your way, slowly building a bond. You earn bed & food by magic shows/work. One night you are asked to do a show at BARON\'s house. TRAVELLER thinks it\'s a bad idea.',
      options: [18, 19]
    },
    { chapter: 7,
      choice: 'Lie & carry on together',
      text: 'Speak to the traveller & try to convince him you have no idea what\'s going on but that you should stay together for safety. You carry on, Traveller doesn\'t trust you. You earn bed & food by magic shows/work. One night you are asked to do a show at Generous Host\'s house. Traveller thinks it\'s a bad idea.',
      options: [18, 19]
    },
    { chapter: 8,
      choice: 'Lie & send him back to city A',
      text: 'Speak to the traveller & try to convince him you have no idea what\'s going on & he should return to City A. Traveller goes back to town to join caravan & maybe tell the guards about you. You carry on alone, earning food & beds by magic shows/work. You are asked to do a show at Generous Host\'s house',
      options: [22, 23]
    },
    //
    // SOLO ROUTE(dead TRAVELLER), origins: you kill the TRAVELLER(2) & carry on alone. You are invited to perform by the local BARON. Perform (22) or make your excuses (23), either way combines with SOLO ROUTE(clean conscience)
    { chapter: 9,
      choice: 'Kill the traveller & continue alone',
      text: 'You feel guilty for the death of the TRAVELLER & move on your way. You travel onwards, working and performing for food & supplies. Eventually you reach a town and are invited by the local BARON to perform.',
      options: [22, 23]
    },
    // GUARDED CARAVAN: You kill the traveller (5) and return to city A. This prompts the mercenaries to leave early with the caravan, you are forced to come along to show them the attack site. You all come under stealth attacks & JOSHUA is asked to help as casualties rise. You can choose to help with the wounded(25) or help the magicians(24) ends with everyone from the CARAVAN dead and combines with MERCENARY ROUTE.
    { chapter: 10,
      choice: 'Kill the traveller & go back to city A',
      text: 'You feel guilty for the death of the traveller & head back to city A. You arrive morning of day 2 just as the Caravan are leaving. You lie convincingly and the caravan leaves with the mercenaries as guards the next day but the mercenaries insist you show them where the attack took place. Something is wrong - all the bodies have disappeared and the forest is unnaturally quiet. The Guarded Caravan is attacked at night by unseen assailants. You have been keeping to yourself but have been asked to help as casualties rise.',
      options: [24, 25]
    },
    // !MERCENARY ROUTE, origin: 3. You went with the mercenaries and now you're being asked to fight; options: help with the wounded(25), help the magicians(24) and continue with MERCENARY ROUTE, or refuse (14) and start SOLO ROUTE(clean conscience)
    { chapter: 11,
      choice: 'Travel with the mercenaries',
      text: 'You travel with the mercenaries and come across the site of the CARAVAN massacre. There were no survivors & the mercenaries are angry. They decide to chase the bandits offering you the choice to stay with them or try and make your way alone.',
      options: [24, 25, 14]
    },
    // CARAVAN ROUTE. After leaving city A (2), the caravan is attacked and you choose to hide (12) or fight (13). Either you are captured and eventually the bandits decide to kill the prisoners which leads to your powers being released, or you're hurt during the battle and your powers are released. Options: to kill Caravan & Bandits () starting SOLO ROUTE(dirty conscience) or just the Bandits () to continue with CARAVAN ROUTE.
    { chapter: 12,
      choice: 'Hide',
      text: 'During the attack you hide but are captured. The bandits eventually decide to kill the captives from the Caravan & your power is released',
      options: []
    },
    { chapter: 13,
      choice: 'Fight',
      text: 'You\'re not a very good fighter & are wounded during the fighting. Your powers are released',
      options: []
    },
    // SOLO ROUTE(clean consience). You travel alone and eventually reach the BARONS offer. Either do the show (22) or refuse (23)
    { chapter: 14,
      choice: 'You decide to stay behind the mercenaries & travel alone',
      text: 'As you travel, you begin to build up small pile of wealth, following path of mercenaries for safety.',
      options: [22, 23]
    },
    // !!CARAVAN ROUTE The bandits die and the Caravan survives (12/13). The caravan is suspicious of you but you manage to convince most of them you're harmless. You get to BARON's offer.
    { chapter: 15,
      choice: 'The death of the bandits',
      text: 'Some of the people in the CARAVAN are susicious of you. You push on with the rest of the Caravan, eventually coming to the town of BARON, who invites you to perform',
      options: []
    },
    // MERCENARY ROUTE origin:
    { chapter: 16,
      choice: 'Leave with the mercenaries',
      text: 'Bandits sighted. The mercenaries have wizards with them - you are not powerful but you can cast illusions which might help with the battle, or you can help with the wounded',
      options: [24, 25]
    },
    // CARAVAN ROUTE
    { chapter: 17,
      choice: 'You and the remainin Caravan push on.',
      text: 'The caravan is wondering how they escaped alive. Someone suspects you & they start asking questions',
      options: []
    },

    // --------------------------BARON'S OFFER----------------------------------

    // TRAVELLER ROUTE, you have been found out by the traveller(5). You had the option of trust the traveller & tell him what's going on (6), lie to him but stay together (7) or tell him he's mistaken & send him back to city A(8). Story is roughly similar afterwards: eventually you reach the house of generous host & choose to either do the show (19) or not (18)
    // TRAVELLER ROUTE origins: convinced him you're a friend (6) and made your way to the BARON. You decide whether you should (19) or shouldn't (18) do the show. Both result in you leaving town the following morning and meeting the mercenaries either with or without TRAVELLER.
    // Not doing the show (18) means you bump into the mercenaries on the road the next day with TRAVELLER.
    // Doing the show means you see TRAVELLER outside a bar. You can buy him a drink (20) and then meet the mercenaries with TRAVELLER or sneak away (21) and meet them alone, joining SOLO(clean conscience)
    { chapter: 18,
      choice: 'You take Traveller\'s advice and decide not to do the show',
      text: 'You scrape together enough money for supplies by performing in a local tavern and agree to set off the following morning. On the road, you see the mercenaries & they ask if you\'ve seen anything. You lie, hoping Traveller will back your story.',
      options: []
    },
    { chapter: 19,
      choice: 'Against Traveller\'s advice, you do the show for Generous Host',
      text: 'You are rewarded well for your performance. As you walk back into town, you see Traveller outside a bar.',
      options: [20, 21]
    },
    { chapter: 20,
      choice: 'Go in and buy him a drink',
      text: 'You now have enough money for suplies & agree to set off the next morning. On the road the next day you see the mercenaries on the road. They ask you if you\'ve seen anything. You lie to them & hope Traveller will go along with your story. Fortunately for you, he does & you carry on together. A few days later, you are crossing a bridge when it gives way beneath you. A daemon comes and pulls you to safety. Save TRAVELLER or not?',
      options: []
    },
    { chapter: 21,
      choice: 'Sneak away without being seen',
      text: 'You leave town and get a head start on the road. A few days later you are attacked by bandits. You start running when all of a sudden the Mercenaries and SOLDIER come around the bend. Before they get to you, you are hurt & your powers are released. There is a lot of magic being used by the mercenaries wizards but a lot of destruction is caused by your powers. Afterwards someone asks you if you have any idea where the Daemonic Power came from.',
      options: [30, 34]
    },
    // SOLO ROUTE(clean conscience) either doing the show or not leads you onto the road a few days later. You meet the mercenaries on the road & they announce that they are travelling the same way as you but must stop and see BARON first. You make your excuses and say you'll see them on the trail. You are chased off a cliff by mercenaries when a daemon pops out to save you, unfortunately dumping you at the feet of the MERCENARIES. You choose to kill them all (30) joining SOLO ROUTE(dirty conscience) or tell the truth (31) and join MERCENARY ROUTE.
    { chapter: 22,
      choice: 'You decided to do the show',
      text: 'You are well rewarded for your performance, but on your way back to town you are attacked & your powers are released. Too hurt to leave town this evening, you take a room at a local inn. In the morning there\'s talk of an animal attack. You meet the mercenaries on the road and they ask you if you want to go with them. You say you\'ll see them on the trail. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [30, 31]
    },
    { chapter: 23,
      choice: 'You decided not to do the show',
      text: 'Generous Host loses his friendly veneer & kicks you out of the town just before the gates close. You have no choice but to spend a cold night on the road. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [30, 31]
    },
    // END MERCENARY ROUTE. In (10), (11), (16), you decided to help the wizards (24) or help the wounded (25). Your powers are released during an attack and suspicions are raised. Finally it is bought into the open and you are forced to explain. Tell the truth (26) or lie (27). Lieing only delays the inevitable arrival at City B & leads to NECROMANCERS or MAGICIANS.
    { chapter: 24,
      choice: 'You decide to help the mercenary wizards',
      text: 'JOSHUA\'s power is released & eventually he is confronted by the other wizards & mercenaries.',
      options: [26, 27]
    },
    { chapter: 25,
      choice: 'You decide to help the wounded',
      text: 'Wounded in battle & JOSHUA\'s power is released & eventually he is confronted by the wizards & mercenaries. Lie or tell the truth',
      options: [26, 27]
    },
    { chapter: 26,
      choice: 'You decide to tell the truth',
      text: 'The mercenaries admit to having worked with much worse & say they\'ll keep your secret for you. Eventually you reach City B and they bid you luck. You choose to seek out the necromancers or the magician\'s guild.',
      options: [36, 37]
    },
    { chapter: 27,
      choice: 'You decide to lie',
      text: 'They can\'t prove it either way. In the next attack one of the wizards throws a spell at you & then a fireball, forcing you to draw on your power and you are exposed. Choose to kill them all or just the enemy, knowing you will have to explain if you don\'t kill them.',
      options: [28, 29]
    },
    { chapter: 28,
      choice: 'You are forced to admit the truth',
      text: 'They\'re angry you lied but won\'t turn you in if you help them out. You have no choice but to agree & are hit with near-deadly spells each time they go into conflict. Eventually you reach city B. Two of the magicians tries to sell you to the necromancers but you\'re saved by SOLDIER. Choose to go to Magician\'s guild or necromancers',
      options: [36, 37]
    },
    { chapter: 29,
      choice: 'You decide to kill them all',
      text: 'They knew you might do this all along & you\'re hit with healing spells until the demons leave and then chained for the journey to City B where they sell you to the necromancers',
      options: [35]
    },
    //END SOLO ROUTE(clean conscience) you are chased off a cliff by a bear, saved by a winged demon & dumped in front of the mercenaries. Choose to kill them all or tell the truth. If you kill them all you visit the NECROMANCERS/MAGICIANS, if you try and explain you\'re sold to the NECROMANCERS.
    { chapter: 30,
      choice: 'You decide to kill them all',
      text: 'You make it... barely. But now you are truly damned. You keep on to City B & are face with the choice of going to the Magician\'s Guild or the Necromancers.',
      options: [36, 37]
    },
    { chapter: 31,
      choice: 'You try to explain',
      text: 'They agree to keep your secret for now if you help them out. You have no choice and are hit by near-deadly spells each time they go into battle. Eventually you reach city B. Two of the magicians sell you to the necromancers.',
      options: [35]
    },

    //CARAVAN ROUTE(BARON) the CARAVAN arrives at BARON's town and you are asked to perform(15). Either you agree (32) or refuse (33) either way you are forced onto the road on your own.
    { chapter: 32,
      choice: 'You decided to do the show',
      text: 'You are well rewarded for your performance, but on your way back to town you are attacked & your powers are released. Too hurt to leave town, you take a room at a local inn. In the morning there\'s talk of an animal attack. The Caravan left without you and someone told the city watch that you might have had something to do with the attack and maybe even the other attacks recently. You are held, only for word of a new attack taking place while you were imprisoned. You are released & set off. A bridge gives way underneath you and you are pulled from the water by a daemon, just as the MERCENARIES come in to view.',
      options: [30, 31, 34]
    },
    { chapter: 33,
      choice: 'You decided not to do the show',
      text: 'Generous Host loses his friendly veneer & kicks you out of the town just before the gates close. You have no choice but to spend a cold night on the road. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. Choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [30, 31]
    },
    { chapter: 34,
      choice: 'You manage to talk your way out of it',
      text: 'Some of the mercenaries are suspicious, but you make it to City B without further issue. You stay a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but you are kidnapped by 2 of the mercenaries and sold to the necromancers.',
      options: [35]
    },

    //---------------------CITY B
    // NECROMANCERS(CHAINED)
    { chapter: 35,
      choice: 'You were sold to the necromancers',
      text: 'You are locked in a cell, wondering how you\'ll be able to get out of this mess when you hear a rumbling voice...',
      options: []
    },
    // NECROMANCERS(FREE)
    { chapter: 36,
      choice: 'You chose to go to the necromancers',
      text: 'The necromancers tell you they think they may be able to teach you how to control your curse.',
      options: []
    },
    // MAGICIAN'S
    { chapter: 37,
      choice: 'You chose to go to the magician\'s guild',
      text: 'They think you\'re evil and lock you in a cage. You hear a rumbling voice...',
      options: []
    },

    // TRAVELLER ROUTE after BARON's town, you were crossing a bridge which collapsed. You were pulled from the water by a daemon and had to choose to save TRAVELLER() or let him die(). Either way you are dumped in front of the mercenaries.
    { chapter: 38,
      choice: 'You don\'t bother saving TRAVELLER',
      text: 'Some of the mercenaries are suspicious, but you make it to City B without further issue. You stay a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but you are kidnapped by 2 of the mercenaries and sold to the necromancers.',
      options: [35]
    },
    { chapter: 39,
      choice: 'You save TRAVELLER & spare the MERCENARIES',
      text: 'You have no choice but to explain to the mercenaries about your ailment. They agree to keep your secret for now if you help them out. You have no choice and are hit by near-deadly spells each time they go into battle. Eventually you reach city B. Two of the magicians try to sell you to the necromancers but TRAVELLER saves you. You ask his advice & he recommends the NECROMANCERS but says it\'s up to you.',
      options: [36, 37]
    },
    { chapter: 39,
      choice: 'You save TRAVELLER & kill the MERCENARIES',
      text: 'You have no choice but to try and kill the mercenaries. Somehow you manage it, and are then able to help TRAVELLER recover. Eventually you both make it to City B & you ask him for his advice he recommends the NECROMANCERS but says it\'s up to you.',
      options: [36, 37]
    }


  ])
    .then(chapters => console.log(`${chapters.length} chapters created`))
    .catch(err => console.log(err))
    // .finally(() => mongoose.connection.close())
})
