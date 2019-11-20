const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Chapter = require('../models/chapter')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true },  (err, db) => {
  if (err) return console.log(err)

  db.dropDatabase()

  Chapter.create([
    //Chapter 1 & initial choices of travelling companions.
    { chapter: 1,
      choice: 'Begin your journey...',
      text: `You have a mysterious sickness. You want to go from city A to city B, where you believe there may be a cure. You are currently in an inn, and overhear a traveller talking about making the same journey. He mentions a caravan leaving for City B tomorrow, a mercenary group who will be carrying out a patrol between city A & B. He will be travelling on his own and invites you along. \n

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      options: [
        {
          option: 'Join the solo traveller',
          id: 2
        },
        {
          option: 'Join the mercenary band',
          id: 3
        },
        {
          option: 'Join the merchant Caravan.',
          id: 4
        }
      ]
    },
    // TRAVELLER ROUTE, you set off with traveller (1) and after a couple of days you are attacked & the power is released. Decisions: kill bandits & spare the traveller (5) OR kill bandits & traveller (9)
    { chapter: 2,
      choice: 'Join the solo traveller',
      text: 'You \'re attacked by bandits. You get hurt and the power is released. \n\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      options: [
        {
          option: 'You spared the traveller.',
          id: 5
        },
        {
          option: 'Lie & send him back to city A',
          id: 8
        }
      ]
    },
    // !MERCENARY ROUTE,  2 more days in City A. You have a choice to travel with them(11) or follow along the next day (14)SOLO ROUTE(clean conscience)
    { chapter: 3,
      choice: 'Join the mercenary band',
      text: `The mercenaries are leaving in 4 days. You have 4 more days in city A. You're attacked one night in an alley and protected by SOLDIER. The night before they leave, news comes in that the caravan has been attacked. The mercenaries warn you that they will be travelling fast & you might be asked to help. \n

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      options: [
        {
          option: 'Travel with the mercenaries',
          id: 11
        },
        {
          option: 'You decide to stay behind the mercenaries & travel alone',
          id: 14
        }
      ]
    },
    // CARAVAN ROUTE, you travel with the caravan and are attacked. Choose to Hide(12) or Fight(13)
    { chapter: 4,
      choice: 'Join the merchant Caravan.',
      text: 'Leave the next morning, the Caravan is attacked by bandits',
      options: [
        {
          option: 'Kill the traveller & go back to city A',
          id: 10
        },
        {
          option: 'Travel with the mercenaries',
          id: 11
        }
      ]
    },
    // TRAVELLER ROUTE, You decided to spare the traveller after the initial attack & now must make your decision (5): convince him you're a friend(6)TRAVELLER, try and convince him you have no idea what's going on but that you should stay together (7)TRAVELLER, try and convince him you have no idea what's going on but that he should go his own way (8)OLO ROUTE(clean conscience), kill the traveller & carry on (9)SOLO ROUTE(dead TRAVELLER), kill the TRAVELLER & return to City A (10)GUARDED CARAVAN.
    { chapter: 5,
      choice: 'You spared the traveller.',
      text: 'Traveller suspects the weird power has something to do with you & challenges you.',
      options: [
        {
          option: 'Convince him you\'re a friend',
          id: 6
        },
        {
          option: 'Lie & carry on together',
          id: 7
        },
        {
          option: 'Lie & send him back to city A',
          id: 8
        },
        {
          option: 'Kill the traveller & continue alone',
          id: 9
        },
        {
          option: 'Kill the traveller & go back to city A',
          id: 10
        }]
    },
    { chapter: 6,
      choice: 'Convince him you\'re a friend',
      text: 'Speak to the traveller & try to convince him you are a good person with a nasty affliction & push on together. You carry on your way, slowly building a bond. You earn bed & food by magic shows/work. One night you are asked to do a show at BARON\'s house. TRAVELLER thinks it\'s a bad idea.',
      options: [
        {
          option: 'You take Traveller\'s advice and decide not to do the show',
          id: 18
        },
        {
          option: 'Against Traveller\'s advice, you do the show for Generous Host',
          id: 19
        }]
    },
    { chapter: 7,
      choice: 'Lie & carry on together',
      text: 'Speak to the traveller & try to convince him you have no idea what\'s going on but that you should stay together for safety. You carry on, Traveller doesn\'t trust you. You earn bed & food by magic shows/work. One night you are asked to do a show at Generous Host\'s house. Traveller thinks it\'s a bad idea.',
      options: [{
        option: 'You take Traveller\'s advice and decide not to do the show',
        id: 18
      },
      {
        option: 'Against Traveller\'s advice, you do the show for Generous Host',
        id: 19
      }]
    },
    { chapter: 8,
      choice: 'Lie & send him back to city A',
      text: 'Speak to the traveller & try to convince him you have no idea what\'s going on & he should return to City A. Traveller goes back to town to join caravan & maybe tell the guards about you. You carry on alone, earning food & beds by magic shows/work. You are asked to do a show at Generous Host\'s house',
      options: [
        {
          option: 'You decided to do the show',
          id: 22
        },
        {
          option: 'You decided not to do the show',
          id: 23
        }
      ]
    },

    // SOLO ROUTE(dead TRAVELLER), origins: you kill the TRAVELLER(2) & carry on alone. You are invited to perform by the local BARON. Perform (22) or make your excuses (23), either way combines with SOLO ROUTE(clean conscience)
    { chapter: 9,
      choice: 'Kill the traveller & continue alone',
      text: 'You feel guilty for the death of the TRAVELLER & move on your way. You travel onwards, working and performing for food & supplies. Eventually you reach a town and are invited by the local BARON to perform.',
      options: [
        {
          option: 'You decided to do the show',
          id: 22
        },
        {
          option: 'You decided not to do the show',
          id: 23
        }
      ]
    },
    // GUARDED CARAVAN: You kill the traveller (5) and return to city A. This prompts the mercenaries to leave early with the caravan, you are forced to come along to show them the attack site. You all come under stealth attacks & JOSHUA is asked to help as casualties rise. You can choose to help with the wounded(25) or help the magicians(24) ends with everyone from the CARAVAN dead and combines with MERCENARY ROUTE.
    { chapter: 10,
      choice: 'Kill the traveller & go back to city A',
      text: 'You feel guilty for the death of the traveller & head back to city A. You arrive morning of day 2 just as the Caravan are leaving. You lie convincingly and the caravan leaves with the mercenaries as guards the next day but the mercenaries insist you show them where the attack took place. Something is wrong - all the bodies have disappeared and the forest is unnaturally quiet. The Guarded Caravan is attacked at night by unseen assailants. You have been keeping to yourself but have been asked to help as casualties rise.',
      options: [
        {
          option: 'You decide to help the mercenary wizards',
          id: 24
        },
        {
          option: 'You decide to help the wounded',
          id: 25
        }
      ]
    },
    // MERCENARY ROUTE, origin: 3. You went with the mercenaries and now you're being asked to fight; options: help with the wounded(25), help the magicians(24) and continue with MERCENARY ROUTE, or refuse (14) and start SOLO ROUTE(clean conscience)
    { chapter: 11,
      choice: 'Travel with the mercenaries',
      text: 'You travel with the mercenaries and come across the site of the CARAVAN massacre. There were no survivors & the mercenaries are angry. They decide to chase the bandits offering you the choice to stay with them or try and make your way alone.',
      options: [
        {
          option: 'You decide to help the mercenary wizards',
          id: 24
        },
        {
          option: 'You decide to help the wounded',
          id: 25
        },
        {
          option: 'You decide to stay behind the mercenaries & travel alone',
          id: 14
        }
      ]
    },
    // CARAVAN ROUTE. After leaving city A (2), the caravan is attacked and you choose to hide (12) or fight (13). Either you are captured and eventually the bandits decide to kill the prisoners which leads to your powers being released, or you're hurt during the battle and your powers are released. Options: to kill Caravan & Bandits (17) starting CARAVAN-KILLER or just the Bandits (15) to continue with CARAVAN ROUTE.
    { chapter: 12,
      choice: 'Hide',
      text: 'During the attack you hide but are captured. The bandits eventually decide to kill the captives from the Caravan & your power is released',
      options: [
        {
          option: 'Try to contain the powers & save the caravan.',
          id: 15
        },
        {
          option: 'Unleash the full fury of the power & kill everyone',
          id: 17
        }
      ]
    },
    { chapter: 13,
      choice: 'Fight',
      text: 'You\'re not a very good fighter & are wounded during the fighting. Your powers are released',
      options: [
        {
          option: 'Try to contain the powers & save the caravan.',
          id: 15
        },
        {
          option: 'Unleash the full fury of the power & kill everyone',
          id: 17
        }
      ]
    },
    // SOLO ROUTE(clean consience). You travel alone and eventually reach the BARONS offer. Either do the show (22) or refuse (23)
    { chapter: 14,
      choice: 'You decide to stay behind the mercenaries & travel alone',
      text: 'As you travel, you begin to build up small pile of wealth, following path of mercenaries for safety. You reach a BARON\'s land & he asks you to provide a private performance',
      options: [
        {
          option: 'You decided to do the show',
          id: 22
        },
        {
          option: 'You decided not to do the show',
          id: 23
        }
      ]
    },
    // CARAVAN ROUTE The bandits die and the Caravan survives (12 || 13). The caravan is suspicious of you but you manage to convince most of them you're harmless. You get to BARON's offer.
    { chapter: 15,
      choice: 'Joshua was hurt & his powers were released but he was able to stop them from killing the caravan as well.',
      text: 'Some of the people in the CARAVAN are susicious of you. You push on with the rest of the Caravan, eventually coming to the town of BARON, who invites you to perform.',
      options: [
        {
          option: 'You decide to do the show',
          id: 32
        },
        {
          option: 'You make your excuses and disappoint the Baron.',
          id: 33
        }
      ]
    },
    // MERCENARY ROUTE origin:
    { chapter: 16,
      choice: 'Leave with the mercenaries',
      text: 'Bandits sighted. The mercenaries have wizards with them - you are not powerful but you can cast illusions which might help with the battle, or you can help with the wounded',
      options: [
        {
          option: 'You decide to help the mercenary wizards',
          id: 24
        },
        {
          option: 'You decide to help the wounded',
          id: 25
        }
      ]
    },


    // --------------------------BARON'S OFFER----------------------------------
    // START CARAVAN-KILLER ROUTE - BARON'S OFFER.
    { chapter: 17,
      choice: 'The power is truly unleashed, killing trader & bandits alike',
      text: 'JOSHUA makes his way from the attack site, travelling from village to village. He manages to avoid the mercenaries for the most part, and eventually comes to the home of BARON who invites JOSHUA to perform.',
      options: [
        {
          option: 'Perform for the BARON',
          id: 47
        },
        {
          option: 'Make an excuse',
          id: 40
        }
      ]
    },
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
      options: [
        {
          option: 'Go in and buy him a drink',
          id: 20
        },
        {
          option: 'Sneak away without being seen',
          id: 21
        }
      ]
    },
    { chapter: 20,
      choice: 'Go in and buy him a drink',
      text: 'You now have enough money for suplies & agree to set off the next morning. On the road the next day you see the mercenaries on the road. They ask you if you\'ve seen anything. You lie to them & hope Traveller will go along with your story. Fortunately for you, he does & you carry on together. A few days later, you are crossing a bridge when it gives way beneath you. A daemon comes and pulls you to safety. Save TRAVELLER or not?',
      options: []
    },
    { chapter: 21,
      choice: 'Sneak away without being seen',
      text: 'You leave town and get a head start on the road. A few days later you are attacked by bandits. You start running when all of a sudden the Mercenaries and SOLDIER come around the bend. Before they get to you, you are hurt & your powers are released. There is a lot of magic being used by the mercenaries wizards but a lot of destruction is caused by your powers. Afterwards someone asks you if you have any idea where the Daemonic Power came from.',
      options: [
        {
          option: 'You decide to kill them all',
          id: 30
        },
        {
          option: 'You manage to talk your way out of it',
          id: 34
        }
      ]
    },
    // SOLO ROUTE(clean conscience) either doing the show or not leads you onto the road a few days later. You meet the mercenaries on the road & they announce that they are travelling the same way as you but must stop and see BARON first. You make your excuses and say you'll see them on the trail. You are chased off a cliff by mercenaries when a daemon pops out to save you, unfortunately dumping you at the feet of the MERCENARIES. You choose to kill them all (30) joining SOLO ROUTE(dirty conscience) or tell the truth (31) and join MERCENARY ROUTE.
    { chapter: 22,
      choice: 'You decided to do the show',
      text: 'You are well rewarded for your performance, but on your way back to town you are attacked & your powers are released. Too hurt to leave town this evening, you take a room at a local inn. In the morning there\'s talk of an animal attack. You meet the mercenaries on the road and they ask you if you want to go with them. You say you\'ll see them on the trail. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [
        {
          option: 'You decide to kill them all',
          id: 30
        },
        {
          option: 'You try to explain',
          id: 31
        }
      ]
    },
    { chapter: 23,
      choice: 'You decided not to do the show',
      text: 'Generous Host loses his friendly veneer & kicks you out of the town just before the gates close. You have no choice but to spend a cold night on the road. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [
        {
          option: 'You decide to kill them all',
          id: 30
        },
        {
          option: 'You try to explain',
          id: 31
        }
      ]
    },
    // END MERCENARY ROUTE. In (10), (11), (16), you decided to help the wizards (24) or help the wounded (25). Your powers are released during an attack and suspicions are raised. Finally it is bought into the open and you are forced to explain. Tell the truth (26) or lie (27). Lieing only delays the inevitable arrival at City B & leads to NECROMANCERS or MAGICIANS.
    { chapter: 24,
      choice: 'You decide to help the mercenary wizards',
      text: 'JOSHUA\'s power is released & eventually he is confronted by the other wizards & mercenaries.',
      options: [
        {
          option: 'You decide to tell the truth',
          id: 26
        },
        {
          option: 'You decide to lie',
          id: 27
        }
      ]
    },
    { chapter: 25,
      choice: 'You decide to help the wounded',
      text: 'Wounded in battle & JOSHUA\'s power is released & eventually he is confronted by the wizards & mercenaries. Lie or tell the truth',
      options: [
        {
          option: 'You decide to tell the truth',
          id: 26
        },
        {
          option: 'You decide to lie',
          id: 27
        }
      ]
    },
    { chapter: 26,
      choice: 'You decide to tell the truth',
      text: 'The mercenaries admit to having worked with much worse & say they\'ll keep your secret for you. Eventually you reach City B and they bid you luck. You choose to seek out the necromancers or the magician\'s guild.',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 27,
      choice: 'You decide to lie',
      text: 'They can\'t prove it either way. In the next attack one of the wizards throws a spell at you & then a fireball, forcing you to draw on your power and you are exposed. Choose to kill them all or just the enemy, knowing you will have to explain if you don\'t kill them.',
      options: [
        {
          option: 'You are forced to admit the truth',
          id: 28
        },
        {
          option: 'You decide to kill them all',
          id: 29
        }
      ]
    },
    { chapter: 28,
      choice: 'You are forced to admit the truth',
      text: 'They\'re angry you lied but won\'t turn you in if you help them out. You have no choice but to agree & are hit with near-deadly spells each time they go into conflict. Eventually you reach city B. Two of the magicians tries to sell you to the necromancers but you\'re saved by SOLDIER. Choose to go to Magician\'s guild or necromancers',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 29,
      choice: 'You decide to kill them all',
      text: 'They knew you might do this all along & you\'re hit with healing spells until the demons leave and then chained for the journey to City B where they sell you to the necromancers',
      options: [
        {
          option: 'You were sold to the necromancers',
          id: 35
        }
      ]
    },
    //END SOLO ROUTE(clean conscience) you are chased off a cliff by a bear, saved by a winged demon & dumped in front of the mercenaries. Choose to kill them all or tell the truth. If you kill them all you visit the NECROMANCERS/MAGICIANS, if you try and explain you\'re sold to the NECROMANCERS.
    { chapter: 30,
      choice: 'They are a threat and so you decide to kill the mercenaries.',
      text: 'You make it... barely. But now you are truly damned. You keep on to City B & are face with the choice of going to the Magician\'s Guild or the Necromancers.',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 31,
      choice: 'You try to explain',
      text: 'They agree to keep your secret for now if you help them out. You have no choice and are hit by near-deadly spells each time they go into battle. Eventually you reach city B. Two of the magicians sell you to the necromancers.',
      options: [
        {
          option: 'You were sold to the necromancers',
          id: 35
        }
      ]
    },

    //CARAVAN ROUTE(BARON) the CARAVAN arrives at BARON's town and you are asked to perform(15). Either you agree (32) or refuse (33) either way you are forced onto the road on your own.
    { chapter: 32,
      choice: 'You decided to do the show',
      text: 'You are well rewarded for your performance, but on your way back to town you are attacked & your powers are released. Too hurt to leave town, you take a room at a local inn. In the morning there\'s talk of an animal attack. The Caravan left without you and someone told the city watch that you might have had something to do with the attack and maybe even the other attacks recently. You are held, only for word of a new attack taking place while you were imprisoned. You are released & set off. A bridge gives way underneath you and you are pulled from the water by a daemon, just as the MERCENARIES come in to view.',
      options: [
        {
          option: 'You decide to kill them all',
          id: 30
        },
        {
          option: 'You try to explain',
          id: 31
        },
        {
          option: 'You manage to talk your way out of it',
          id: 34
        }
      ]
    },
    { chapter: 33,
      choice: 'You decided not to do the show',
      text: 'Generous Host loses his friendly veneer & kicks you out of the town just before the gates close. You have no choice but to spend a cold night on the road. A few days later you\'re chased off a cliff by a bear, prompting the powers to save you & dump you at the feet of the mercenaries. Choose to kill them all or dismiss the demon & try to talk your way out of it.',
      options: [
        {
          option: 'You decide to kill them all',
          id: 30
        },
        {
          option: 'You try to explain',
          id: 31
        }
      ]
    },
    { chapter: 34,
      choice: 'You manage to talk your way out of it',
      text: 'Some of the mercenaries are suspicious, but you make it to City B without further issue. You stay a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but you are kidnapped by 2 of the mercenaries and sold to the necromancers.',
      options: [
        {
          option: 'You were sold to the necromancers',
          id: 35
        }
      ]
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
    // MAGICIAN'S GUILD(FREE)
    { chapter: 37,
      choice: 'You chose to go to the magician\'s guild',
      text: 'They think you\'re evil and lock you in a cage. You hear a rumbling voice...',
      options: []
    },

    // TRAVELLER ROUTE after BARON's town, you were crossing a bridge which collapsed. You were pulled from the water by a daemon and had to choose to save TRAVELLER() or let him die(). Either way you are dumped in front of the mercenaries.
    { chapter: 38,
      choice: 'You don\'t bother saving TRAVELLER',
      text: 'Some of the mercenaries are suspicious, but you make it to City B without further issue. You stay a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but you are kidnapped by 2 of the mercenaries and sold to the necromancers.',
      options: [
        {
          option: 'You were sold to the necromancers',
          id: 35
        }
      ]
    },
    { chapter: 39,
      choice: 'You save TRAVELLER & spare the MERCENARIES',
      text: 'You have no choice but to explain to the mercenaries about your ailment. They agree to keep your secret for now if you help them out. You have no choice and are hit by near-deadly spells each time they go into battle. Eventually you reach city B. Two of the magicians try to sell you to the necromancers but TRAVELLER saves you. You ask his advice & he recommends the NECROMANCERS but says it\'s up to you.',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 39,
      choice: 'You save TRAVELLER & kill the MERCENARIES',
      text: 'You have no choice but to try and kill the mercenaries. Somehow you manage it, and are then able to help TRAVELLER recover. Eventually you both make it to City B & you ask him for his advice',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },

    //---------BARON'S COURT CARAVAN-KILLER----------------------------
    // CARAVAN-KILLER ROUTE after the attack on the CARAVAN (12) you have the choice to fight (12) or hide (13), both of which call the powers eventually. You chose to kill just the bandits (15), or to kill everyone (17) and continue along the road alone. The CARAVAN-KILLER route eventually comes to the BARON's court, where J is asked to perform. Either you agree or refuse either way you are forced onto the road on your own. Will roughly follow the CARAVAN ROUTE || SOLO ROUTE (32-34 || 30-31)
    //(40) has JOSHUA choose to perform for the BARON () or suggests an Inn in the town(40). Performing for the BARON () reveals the MERCENARIES are the guests of the BARON & JOSHUA begins to feel threatened. He can choose to take a threat as a feeling of near death & summon the power () or keep calm and perform (). Summoning the power puts him on the road the next morning alone & reaching CITY B sometime later. The city has heard of the attacks and are suspicious of demons living in the woods, but there are still stragglers coming in JOSHUA must choose to look for the MAGICIANS or the NECROMANCERS.
    // CARAVAN-KILLER ROUTE(saying no to the BARON) (40) has JOSHUA stay at a local inn. JOSHUA uses coin instead of a magic trick and manages to avoid too much suspicion but is bumped into by a drunk SOLDIER who reacts aggressively. Although SOLDIER is restrained by his friends, a more sober one does ask you if you've seen anything strange. Choose if JOSHUA should see this as a threat or He can choose to take a threat as a feeling of near death & summon the power (41) or keep calm and say he's seen nothing (42). Summoning the power puts him on the road the next morning alone & reaching CITY B sometime later. The city has heard of the attacks and are suspicious of demons living in the woods, but there are still stragglers coming in. JOSHUA is caught and must choose between trying to call the demonic power or admitting defeat.

    { chapter: 40,
      choice: 'JOSHUA makes his excuses, begging off performing for the Baron',
      text: 'The BARON is annoyed but understands that the road has been tough. The BARON recommends the local Inn instead. Visiting the Inn reveals that there are MERCENARIES staying here. JOSHUA pays in cash to avoid suspicion but is questioned by a drunk soldier anyway, ending with the soldier trying to attack J. Soldier is restrained by his friends but still allows J to consider it a threat.',
      options: [
        {
          option: 'consider the drunk soldier a threat',
          id: 41
        },
        {
          option: 'Stay calm, it\'s just a drunk soldier',
          id: 42
        }
      ]
    },
    { chapter: 41,
      choice: 'JOSHUA draws on the power',
      text: 'It\'s a bloodbath in the Inn, but JOSHUA makes it out of the small town and back on the road to City B. Several days later, he arrives at CITY B. A messenger made it ahead of him and he is caught in a containment spell at the gates. JOSHUA recognises it as a spell he looked at before and isn\'t sure if it will hold him if he let\'s loose',
      options: [
        {
          option: 'Try and summon inside the containment sphere',
          id: 47
        },
        {
          option: 'Admit defeat',
          id: 43
        }
      ]
    },
    // END CARAVAN-KILLER ROUTE(not summoning in the INN) sees JOSHUA on the road the next morning with an armed escort along with a few remaining travellers. There are no further attacks & the last choice is to go to the NECROMANCERS(36) or the MAGICIANS(37).
    { chapter: 42,
      choice: 'JOSHUA remains calm',
      text: 'Some of the mercenaries are suspicious, but you make it back on the road to City B in a caravan being led by the mercenaries to CITY B. The next morning you decide whether to go to the necromancers or the magicians.',
      options: [
        {
          option: 'You chose to go to the necromancers',
          id: 36
        },
        {
          option: 'You chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    // JOSHUA is arrested at the gates & taken to the MAGICIANS guild.
    { chapter: 43,
      choice: 'JOSHUA admits defeat and is taken to the magician\'s guild',
      text: 'JOSHUA is contained at the gates and after a brief questioning by a magician, you are taken to the MAGICIANS council. They think JOSHUA is evil and lock him in a cage. He hears a rumbling voice...',
      options: []
    },

    // CARAVAN-KILLER ROUTE(saying yes to the BARON) reveals that the BARON has the MERCENARIES as guests(44). After he performs, he is questioned by the soldiers and can choose to see it as a threat (45) or talk his way through it (46). He either ends up on the road alone ((45) - if he kills everyone) or as part of the mercenary protected caravan ((46) - if he talks his way out of it)
    { chapter: 44,
      choice: 'JOSHUA agrees to perform for the BARON',
      text: 'A sense of foreboding grows as JOSHUA makes his way to the dining hall that evening, noticing staff and servants alike avoiding eye contact and sending worried glances towards the darkenning woodland. He gets to the dining hall and realises that the MERCENARIES are also the BARON\'s guests. He has to try and remain calm...',
      options: [
        {
          option: 'Keep calm and perform for the BARON and his guests',
          id: 46
        },
        {
          option: 'Unleash the power on the BARON and his guests',
          id: 45
        }
      ]
    },
    { chapter: 45,
      choice: 'Unleash the power on the BARON and his guests.',
      text: 'It\'s a bloodbath in the BARON\'s dining room, but JOSHUA makes it back on the road to City B. Several days later, he arrives at but a messenger made it ahead of you and you are caught in a containment spell at the gates. JOSHUA recognises it as a spell he looked at before and isn\'t sure if it will hold him if he let\'s loose',
      options: [
        {
          option: 'Try and summon inside the containment sphere',
          id: 47
        },
        {
          option: 'Admit defeat',
          id: 43
        }
      ]
    },
    { chapter: 46,
      choice: 'Stay calm and entertain.',
      text: 'JOSHUA faces a few questions from the MERCENARIES after the performance, especially the wizards, but manages to calm their suspicions for now & is told to join the armoured caravan that will be leaving for City B the next day. Several days later, he arrives at but a messenger made it ahead of you and you are caught in a containment spell at the gates. JOSHUA recognises it as a spell he looked at before and isn\'t sure if it will hold him if he let\'s loose',
      options: [
        {
          option: 'Try and summon inside the containment sphere',
          id: 47
        },
        {
          option: 'Admit defeat',
          id: 43
        }
      ]
    },
    { chapter: 47,
      choice: 'Joshua decides to chance his luck and summon inside the containment sphere',
      text: 'The daemonic power isn\'t pleased. Joshua is freed and the magicians are killed, but now the daemon is taking a much more active role in Joshua\'s life. He presents you with a choice: He will give you a year to do whatever you like and then he will take possession of you, or accept that the demon will be your new tutor.',
      options: [
        {
          option: 'Take the year'
        },
        {
          option: 'Accept the demon as your personal trainer'
        }
      ]
    }


  ])
    .then(chapters => console.log(`${chapters.length} chapters created`))
    .catch(err => console.log(err))
    // .finally(() => mongoose.connection.close())
})
