const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Chapter = require('../models/chapter')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true },  (err, db) => {
  if (err) return console.log(err)

  db.dropDatabase()

  Chapter.create([
    //Chapter 1 & initial choices of travelling companions.
    { chapter: 1,
      choice: 'After years of searching for answers, Joshua found a near-forgotten mention of the mages of Karhold and set off on his journey. But there are still many miles to go...',
      text: `Joshua wrapped his cloak around him, body hunched against the rain and wind that bit cleanly through his near threadbare clothing. He staggered, cursing and stumbling in the mud that clotted the streets during the day and froze into ankle-breaking divots with the night, one foot disappearing almost to the knee in a puddle he hoped niaively was mostly water. Ahead of him a door opened, spearing light and noise from the Inn into the street, staying open for a brief moment as a patron considered braving the elements to get him before deciding better of it and retreating to the bar and the fire inside.

      Skirting the edge of the narrow street in an attempt to avoid the worst of the mud, Joshua pushed on, finally reaching the doorway that had opened briefly earlier and checking the sign above. 'The Trader's Weights' was scrawled on a sign that had been poorly painted many years before and never touched up since, had it been a bright day and had he looked closely, Joshua may also have made out the barest hint of a sketch of a pair of scales. This was the place. He sighed, reaching for the door.

      Joshua had arrived in Rangedigport by ship two days before, his stomach twisted by the lumpy seas and his mood just as foul. Even the wind, chilled high in the mountains and channeled by the narrow lanes to blow straight into his face failed to enliven him and he had been forced to spend a night in an inn by the docks before he felt well enough to head into the city proper. Rangedigtun served only one purpose, to serve as a port for Karhold and the other cities behind the Cwimal mountains and the other three Kingdoms. His enquiries for any travellers heading to Karhold had earned a wave towards the warren of streets that was the hub for caravans heading into the mountains and the name of an inn just as the skies opened and the streets began to clear for the early-dusk the storm had bought.

      The warmth and noise of the inn hit him almost as hard as the wind. Eyes watering and nose streaming, Joshua kicked the mud from his boots and stepped over the lintel, smoothing his ragged cloak as he wended his way to the bar running along the far wall. When it was newly purchased, the mages cloak would have earned him respectful glances, maybe even an invitation to perform some simple tricks and the free food and drink that came with it. He remembered the day he had received it, several years and more than one repeated exam after first entering the magician's college at Villin, the pride he had felt had long since twisted into bitterness and the once-fine cloak was a regular reminder of all that had befallen him since those heady days.

      Mentally counting the coins available for food and lodging did not take long, and after a short exchange at the bar he had even fewer left in exchange for a heap of straw in the barn for the night and a mug of warmed and spiced cider to wash down a bowl of bland stew. Carefully balancing bowl, mug and heel of stale bread, Joshua made his way towards a fire-place spitting it's disgust at unseasoned logs towards a small crowd that cursed when sparks found bare skin, and began to eavesdrop on the conversations.

      "... tell you, the bandits are nothing to worry about, but if you're that concerned, why not wait and travel with Captain Tomas?" The speaker was an overly-fed man who had the air of one who didn't get the respect he felt he deserved most of the time and made up for it by providing unsolicited advice to any within earshot. The recipient of this nugget of wisdom was nodding in apparent agreement, though with his eyes were focused on a corner of the firegrate and giving no other outward sign of attentiveness, he could equally have been agreeing with a voice only he could hear or a fleeting thought of his own.

      "Tomas?!" The name was sneered with disgust by one of the others, a scrawny man in clothing almost identical to the big man's, his fawning glance at the same marking the sneerer as one of his followers. "You mean the Sleepy Soldier? He who napped through the entire Southern campaign and yet still managed a knighting at the end? I'd rather chance the roads on my own!" The jest was met with grunts of near amusement and a benevolent smile from the big man, but no actual laughter. The jester's sallow cheeks coloured slightly and his features became more pinched as his joke died.

      "Sound advice my friend, I thank you for it." The fire-gazer spoke, nodding once at the big man. "It seems I have a lot to think of before I set off for Karhold." Joshua's attention was snatched from his meagre dinner.

      "Karhold? You are heading to Karhold?" The fire-gazer spared him a brief glance and nodded before turning back to the dancing flames.

      "I'm afraid you have arrived a few minutes too late my new friend." The big man smiled and gave a small belch. Joshua noticed the glazed eyes and the slight slur that marked him as at the edge of drunk. "'Scuse me. I am Markus of Deepwater, purveyor and transporter of fine goods, man of, man of..." he trailed off, waving a hand for patience and excuse as he let out another belch. "Man of the world and all that. But I'm 'fraid I'm a little worse for wear than than I was, heh, you will have to speak to... to..." Markus of Deepwater waved again, this time at the fire-gazer, who's name he had forgotten if he'd ever known it. "m' friend here for the advice. Caleb!" He slammed a meaty hand down on the shoulder of the joke-teller. "Think it's time we were off, hey?"

      Caleb's scowl deepened at the prospect of leaving the warmth and shelter of the inn for the wind and rain outside but none-the-less gathered his and Markus' cloaks from hooks by the fire, and the two men bundled themselves against the elements before stepping into the night. Joshua shuffled closer to the fire, grateful for the now vacant stool that let him eat in a modicum of comfort.

      "If it's not too much trouble..." he began, eyes pleading across the small hearth at the man left behind. A cocked eyebrow was the only invitation to continue. "Umm. I'm trying to get to Karhold you see, it's really quite urgent. And, well..." he waved at the now closed doorway and the two men who had retreated through it. "He mentioned I should ask you for advice?"

      The other man turned his gaze back to the fire, seeming to ponder Joshua's request a moment before reaching his conclusion.

      "There are two choices. Maybe three, now. You can buy passage with our dear friend Markus there, he will be leaving in four days time, heading along the main road with the rest of his caravan and a small group of guards, who will almost certainly come under attack from bandits but may have enough swords to keep the caravan safe. Or you can leave next week with Captain Tomas, he's taking a patrol through to Karhold and has made it clear that any travellers willing to keep up with his pace can come with them."

      Joshua thought of the options. Travelling with Markus would cost him most, if not all of the meagre coin store he had available. Travelling with the mercenaries would be faster certainly and probably safer, but could he afford to wait a week more with the end of his journey so near?

      "You mentioned there might be a third option now?"

      The other man turned from the fire and set Joshua with a stare that seemed to peel him layer by layer, examining each in minute detail in search of an answer to an unknown question. Whatever the stranger saw, apparently it was enough.

      "I am also travelling to Karhold. The roads are too dangerous to travel alone, but two together..." He shrugged. "We'd move faster than Markus' caravan and one can watch while the other sleeps. We also stand a better chance to slip past any watchmen the bandits may have on the road. My name is Roloff, by the way. And I'm ready to leave this place tomorrow morning."

      Joshua took the proferred hand and gave his name as well.`,
      // His family had not been rich to start with and his tuition had taken them to the brink of poverty and fter his... accident, Joshua had not even gone to ask them for help. They wouldn't have been able to afford it even if they had been inclined to help after the council had so successfully laid all blame at his feet.
      options: [
        {
          option: 'Join Roloff and set off for Karhold as soon as possible',
          id: 2
        },
        {
          option: 'Wait for a week but have Captain Tomas and his patrol for an armed escort',
          id: 3
        },
        {
          option: 'Join Markus and his caravan and hope that his guards will keep you safe.',
          id: 4
        }
      ]
    },
    // TRAVELLER ROUTE, you set off with traveller (1) and after a couple of days you are attacked & the power is released. Decisions: kill bandits & spare the traveller (5) OR kill bandits & traveller (9)
    { chapter: 2,
      choice: 'Joshua met Roloff in the Trader\'s Weights and they decided to travel on to Karhold together.',
      text: `The rain overnight had worked it's way in through the cracks and seems of the barn walls and ceiling, dripping intrusively onto the hay they had slept on and soaking through threadbare blankets and clothes leaving Joshua and Roloff cold, wet and aching when they began moving the following morning. Joshua rose slowly, stretching his cricked back. Despite the discomfort, he was feeling good about the day. He would at last be setting off on what would hopefully be the last leg of his journey, and end to years of torment.

      Roloff was apparently just as afflicted by the poor night's sleep, rolling a shoulder and wincing as he moved to collect his pack. They broke their fast with fresh, if gritty, bread in the Trader's Weights and pushed out onto the streets before the sun had forced through the weakening clouds. Despite the early hour, there were already others on the streets getting ready for the day's labour and the two new companions moved into the crowd towards the gates and the road to Karhold, collecting what supplies they needed for their journey.

      By mid-day, the two men had moved beyond sight of the town walls, the road stretching out a few miles ahead of them before disappearing into the forests and foothills of the Cwimal Mountain Range ahead of them. Despite the daunting journey ahead of them, with all the perils of the road from bandits to the mountains themselves they'd have to pass, Joshua found himself smiling.

      "Go on then." Said Roloff, glancing across at him and catching the smile. "Tell us what's got you so happy when we're about to walk through some of the hardest, most dangerous country in the Four Kingdoms." The smile slipped a little as Joshua pulled his thoughts together.

      "I have been on the road, searching for answers to my questions, for nearly five years now. To think this is the last stretch of my journey... well. Even with the considerable dangers ahead, I was able to forget about them a little and hope, just for a moment that soon my life would go back to a semblance of normality."

      Roloff gave a grunt. "Reasonable enough I suppose." And they lapsed back into silence.

      So they progressed, each mile marked by short bursts of conversation, until the reached the edge of the woods. Roloff loosened the sword hanging at his hip, a short blade handled with a soldiers familiarity. Joshua wished he'd thought to buy one of his own, though just as the thought passed through his head it was chased by another that reminded him he had no idea how to use it. He gripped the handle of the knife he had in place of anything larger - perhaps less practical in combat, but infinitely more useful to a man with Joshua's lack of skill with anything larger.

      Any levity Joshua may have had was brushed away by the hanging branches as they closed over the two travellers, the soft sounds of life in the trees around them doing nothing to lift the anxiety they both felt. The forests around the Four Kingdoms were populated by wolves and bears, a scant few lions being hunted into extinction, all potentially dangerous to a lone traveller. But the great forest that lapped like a sea against the Cwimals had another, greater threat: Bandits. Despite the best efforts of local lords and the mercenaries they hired to hunt them down, the forest was simply too large and and the resources too few for those in power to effectively root out the threat to travellers.

      Eyes darting up to find a space in the canopy before it closed over them for good, Joshua breathed a prayer begging for protection from all the gods he could name. "Please, let us pass in safety. Watch over us as we travel... Please don't let it happen again."

      For almost the entire afternoon, they travelled in silence. Roloff, who's head had been constantly turning this way and that for any sign of a threat and apparently also for a suitable camp for themselves, finally pointed off to the side of the trail.

      "Here. We turn off here and make a camp for the night." A quick glance confirmed that Joshua had heard, and so Roloff lead them away from the trail, carefully moving branches to make sure they didn't break and show sign of their passing, coming shortly to a clearing against the base of a short cliff. "Don't talk too loudly," he cautioned in a low voice. "I'm pretty sure we haven't been spotted, but no need to take chances. No fire tonight either."

      Joshua winced at the thought of a cold camp, hoping the rain would spare them a further lashing as they dragged branches into the clearing to make a lean to against the cliff wall, a spare cloak pinned between two crude layers of dead-fall to provide them with protection against anything that might come against them in the night. He sighed, gnawing at a stick of dried meat, wondering if he had made the right choice in travelling with so little protection. Markus might have been a bore, but he at least had soldiers with him and Joshua doubted that the rotund merchant would accept a cold camp. He had no idea what it would have been like if he'd chosen to travel with Captain Tomas and his mercenaries, but was almost as glad to avoid the coterie of mages that would inevitably accompany a mercenary group larger than a dozen men as he was worried about the bandits.

      His stomach grumbled it's discontent at the sparse offerings as Joshua packed away his supplies and cinched his cloak tighter around his shoulders.

      "That's a mages cloak." They had been quiet so long the comment near made Joshua jump, and he stumbled for an answer.

      "Yes, yes it is. I mean yes I am. A mage that is."

      "Hnh. Thought you all liked to keep them clean and pretty so everyone knew who you were." Joshua felt his cheeks burn in shame at the state he had sunk to. "Looks better for a bit of living, you ask me. Never did much like mages, too smart for their own good most of them."

      The mollifying comment from Roloff did nothing to abate Joshua's shame, and in his misery he began stuttering his story. "Well you see..." he trailed off and shrugged miserably. "I suppose I was never a particularly good mage. Oh I could do your basic illusions well enough, but anything beyond that... well it just never quite works how I want it to."

      Roloff gave another non-commital grunt and Joshua began thinking that grunts probably made up the majority of his new travelling companion's vocabulary. "Ah well. No great loss, from what I've seen." Roloff pulled his own cloak tighter. "Met a few in my time. Too many of them had their heads up their arses. Wouldn't be a problem but the more magic you use, the more your head swells and the harder it is to pull the head out again."

      Despite himself, Joshua snorted a laugh and admitted that Roloff was right.

      "Present company excepted, of course."

      "Oh of course." He chanced a question of his own. "How do you come to know so much of magicians?"

      "Don't know much, just enough to form an opinion." Admitted Roloff, busying his hands as he prepared a small sleeping area for them. "Spent a while with various mercenary companies, King Christoph's Army too, before everything went to hell. Met enough of them then that I'd be happy if I never saw another." That was apparently the end of Roloff's history as he glanced at the purpling sky through the entrance to their meagre shelter. "You watch first. Wake me when the moon's past that mountain and we'll swap."

      Joshua shifted cautiously, careful not to knock the wall of their shelter as he wriggled out into the clearing. He had been raised in a town large enough that he had never grown accustomed to the noises of the woods at night and even now found the scufflings and snortings, snaps and hoots disconcerting. Apparently Roloff did not share is discomfort and soon the soft, regular breathing of sleep added to the night's background noise.

      He focused his thoughts, reaching out with his senses into the woods around. He had spoken the truth to Roloff earlier - his magical ability was indeed limited when it came to casting spells, but casting wasn't all that magic could be used for. Perhaps one of the most essential lessons of the mages colleges was that everyone and everything had magic in it, and those who were attuned to it could see, for want of a better word, using magic itself.

      The night around him came alive as he took in the world through new eyes. Every living thing, from the greatest tree in the forest to the smallest insect living within, glowed with light and life, distinct in it's own spirit. Even the mountains they were heading towards had a presence, a soul of sorts, built by hundreds, thousands of years of the people living around them crafting myths and legends that seeped into the veins of the mountain itself and became something... more.

      Joshua reached tentatively further and further afield, trying to discern if any of the life around them was a threat. That in itself was a stretch of his abilities, for while opening his eyes was easy enough, trying to see the thoughts or feelings of another living thing was something entirely different. He settled himself with checking for human life, filtering out the myriad insects and animals that called the forest home, seeking that distinct, unmistakable sheen of humanity against the souls of the forest.

      He sighed, leaning back and alowing the magic to fade around him into normalcy. There was no one close that he had been able to find. As he had said to Roloff earlier, he was not confident in his abilities, but he was certain that for at least the next few hours, they were safe from anyone creeping up on them.

      It felt an age before the moon had passed behind the mountain Roloff had indicated and the movement of rising to wake his companion and settle in to the still warm blankets had him awake enough that Joshua was certain his eyes would still be open come the dawn. It was a pleasant surprise when he blinked, only to open his eyes to find Roloff shaking him awake and the dawn greying the dark sky towards colour again.

      The day brightened slowly, the weak spring sunshine battering against low cloud that wrapped the foothills of the mountains in a cloak as ragged as Joshua's own.

      - attack by the bandits. Roloff fights but there are too many Joshua tries to cast spells that will help but nothing works.
      - where the blood falls on the earth from one of the wounded bandits, a daemon/imp rises and attacks him. The bandit dies, but the corpse attacks its friends & kills/turns them too.


      * Try to restrain the power
      * Let it run it's course
      `,
      options: [
        {
          option: 'Restrain the power.',
          id: 5
        },
        {
          option: 'Unleash the full fury of the power',
          id: 9
        }
      ]
    },
    // !MERCENARY ROUTE,  2 more days in City A. You have a choice to travel with them(11) or follow along the next day (14)SOLO ROUTE(clean conscience)
    { chapter: 3,
      choice: 'Joshua decided to wait and travel with the mercenaries',
      text: `* Introduction to the MERCENARIES
      * You are attacked one night in an alley, but are saved by one of the men. You are worried about what might have happened in the city.
      * The next day there is word of an attack on the Caravan. They will be leaving immediately but their main aim will now be looking for the bandits.
      `,
      options: [
        {
          option: 'Offer to help and travel with the mercenaries',
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
      text: `* Joshua waits and leaves 4 days later in the morning with Markus of Deepwater. Caleb is his wagon master.
      * J tries to avoid contact with the other people in the caravan during the day and sleeps away from the others at night.
      * Caleb identifies him as a mage, offers to help for a fee & suspects Joshua is on some sort of mission.
      * The caravan is attacked by bandits.
      * The mercenaries are obviously outnumbered and some start to run, as do the merchants.`,
      options: [
        {
          option: 'Run with everyone else',
          id: 12
        },
        {
          option: 'Try to help the remaining mercenaries',
          id: 13
        }
      ]
    },
    // TRAVELLER ROUTE, You decided to spare the traveller after the initial attack & now must make your decision (5): convince him you're a friend(6)TRAVELLER, try and convince him you have no idea what's going on but that you should stay together (7)TRAVELLER, try and convince him you have no idea what's going on but that he should go his own way (8)OLO ROUTE(clean conscience), kill the traveller & carry on (9)SOLO ROUTE(dead TRAVELLER), kill the TRAVELLER & return to City A (10)GUARDED CARAVAN.
    { chapter: 5,
      choice: 'Joshua spared the traveller.',
      text: '* Roloff suspects the weird power has something to do with him & challenges Joshua.',
      options: [
        {
          option: 'Joshua should try and convince Roloff he\'s a friend',
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
          option: 'Kill Roloff & continue alone',
          id: 9
        },
        {
          option: 'Kill Roloff & go back to city A',
          id: 10
        }]
    },
    { chapter: 6,
      choice: 'Convince Roloff JOshua is a friend',
      text: `* Joshua explains his curse to Roloff and tries to convince him he's a good person & to push on together.
      * they decide to continue on together and earn their keep in barns by helping with menial chores.
      * Eventually they reach a small town where the Baron sees Joshua's cloak & identifies him as a mage. Offers them shelter in exchange for a display.

      * Roloff has a bad feeling and recommends they stay in the town and don't do the show.`,
      options: [
        {
          option: 'Joshua takes Roloff\'s advice and decides not to do the show',
          id: 18
        },
        {
          option: 'Against Traveller\'s advice, Joshua decides to do the show for the Baron',
          id: 19
        }]
    },
    { chapter: 7,
      choice: 'Lie & carry on together',
      text: `* Joshua insists he had nothing to do with the powers, that it is beyond his ability but that he sensed something from one of the fallen bandits.
      * Roloff is possibly convinced and they agree to travel on together, but the old soldier is susicious.
      * Late one afternoon, you arrive at a small town where the local baron sees Joshua's cloak. He offers bread and board in exchange for a private show and suggests staying another night in the town to earn some coin.
      * Roloff has a bad feeling about it and thinks they should stay in the town.`,
      options: [{
        option: 'Joshua takes Roloff\'s advice and decided not to do the show',
        id: 18
      },
      {
        option: 'Against Roloff\'s advice, Joshua does the show for the Baron',
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
      choice: 'Unleashing the power killed Roloff as well as the bandits',
      text: `Joshua feel guilty for the death of the Roloff but decides to push on alone.
      * Joshua travels onwards.
      * Joshua reaches a town and is invited by the local BARON to perform.`,
      options: [
        {
          option: 'JOshua decided to do the show',
          id: 22
        },
        {
          option: 'JOshua decided not to do the show',
          id: 23
        }
      ]
    },
    // GUARDED CARAVAN: You kill the traveller (5) and return to city A. This prompts the mercenaries to leave early with the caravan, you are forced to come along to show them the attack site. You all come under stealth attacks & JOSHUA is asked to help as casualties rise. You can choose to help with the wounded(25) or help the magicians(24) ends with everyone from the CARAVAN dead and combines with MERCENARY ROUTE.
    { chapter: 10,
      choice: 'Joshua kills & goes back to city A',
      text: ` * Joshua feels guilty for the death of Rollof & heads back to city A.
      * He arrives  just as the Caravan are leaving & tell them of the attack by the bandits.
      * The caravan leaves with the mercenaries as guards the next day but the mercenaries insist Joshua shows them where the attack took place.
      * Something is wrong - all the bodies have disappeared and the forest is unnaturally quiet.
      * The Guarded Caravan is attacked at night by unseen assailants. Joshua had been keeping to himself but has been asked to help as casualties rise.`,
      options: [
        {
          option: 'Joshua decides to help the mercenary wizards',
          id: 24
        },
        {
          option: 'Joshua decides to help the wounded',
          id: 25
        }
      ]
    },
    // MERCENARY ROUTE, origin: 3. You went with the mercenaries and now you're being asked to fight; options: help with the wounded(25), help the magicians(24) and continue with MERCENARY ROUTE, or refuse (14) and start SOLO ROUTE(clean conscience)
    { chapter: 11,
      choice: 'Travel with the mercenaries',
      text: `* Joshua travels with the mercenaries and comes across the site of the CARAVAN massacre.
      * There were no survivors & the mercenaries are angry. They start following the bandits, eventually veering across a proper trail.
      * There are markings for Karhold on one of the stones & Joshua considers his options.`,
      options: [
        {
          option: 'Continue on and help the mercenary wizards',
          id: 24
        },
        {
          option: 'Continue on and help the wounded',
          id: 25
        },
        {
          option: 'Travel alone',
          id: 14
        }
      ]
    },
    // CARAVAN ROUTE. After leaving city A (2), the caravan is attacked and you choose to hide (12) or fight (13). Either you are captured and eventually the bandits decide to kill the prisoners which leads to your powers being released, or you're hurt during the battle and your powers are released. Options: to kill Caravan & Bandits (17) starting CARAVAN-KILLER or just the Bandits (15) to continue with CARAVAN ROUTE.
    { chapter: 12,
      choice: 'Joshua hid, but is captured by the bandits.',
      text: 'During the attack Joshua hides but is captured. The bandits eventually decide to kill the captives from the Caravan & his worst fears are realised',
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
      text: 'Joshua is not a very good fighter & is wounded during the fighting. A strange power is released',
      options: [
        {
          option: 'Try to contain the powers & save the caravan.',
          id: 15
        },
        {
          option: 'Run the other way',
          id: 17
        }
      ]
    },
    // SOLO ROUTE(clean consience). You travel alone and eventually reach the BARONS offer. Either do the show (22) or refuse (23)
    { chapter: 14,
      choice: 'Joshua decides to stay behind the mercenaries & travel alone',
      text: `* As he travels, he follows the path of mercenaries for safety.
      * Joshua arrives at a BARON's landm who asks him to provide a private performance in exchange for lodging`,
      options: [
        {
          option: 'He decided to do the show',
          id: 22
        },
        {
          option: 'He decided not to do the show',
          id: 23
        }
      ]
    },
    // CARAVAN ROUTE The bandits die and the Caravan survives (12 || 13). The caravan is suspicious of you but you manage to convince most of them you're harmless. You get to BARON's offer.
    { chapter: 15,
      choice: 'Joshua was hurt & his powers were released but he was able to stop them from killing the caravan as well.',
      text: `* Some of the people in the CARAVAN are susicious, especially Caleb.
      * You push on, eventually coming to the town of BARON, who invites you to perform in exchange for lodging while the rest of the caravan stay in the town..`,
      options: [
        {
          option: 'Joshua decides to do the show',
          id: 32
        },
        {
          option: 'You make your excuses and disappoint the Baron.',
          id: 33
        }
      ]
    },


    //-------------------------------------------------------------------------------
    // ?? EXTRA CHAPTER ?? MERCENARY ROUTE origin:
    // { chapter: 16,
    //   choice: 'Leave with the mercenaries',
    //   text: 'Bandits sighted. The mercenaries have wizards with them - you are not powerful but you can cast illusions which might help with the battle, or you can help with the wounded',
    //   options: [
    //     {
    //       option: 'You decide to help the mercenary wizards',
    //       id: 24
    //     },
    //     {
    //       option: 'You decide to help the wounded',
    //       id: 25
    //     }
    //   ]
    // },
    //-------------------------------------------------------------------------------

    // --------------------------BARON'S OFFER----------------------------------
    // START CARAVAN-KILLER ROUTE - BARON'S OFFER.
    { chapter: 17,
      choice: 'The power is truly unleashed, killing trader & bandits alike',
      text: `* JOSHUA makes his way from the attack site, travelling from village to village.
      * He manages to avoid the mercenaries for the most part, and eventually comes to the home of BARON who invites JOSHUA to perform.`,
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
      choice: 'Joshua takes Roloff\'s advice and decide not to do the show',
      text: `They scrape together enough money for supplies by performing in a local tavern and agree to set off the following morning.
      * On the road, they see the mercenaries & they ask if you've seen anything. Joshua lies, hoping Traveller will back your story.
      * Fortunately for Joshua, he does & they carry on together. A few days later, as they are crossing a bridge when it gives way beneath them, throwing them into the water.
      * A mountain troll snatches Joshua out of the air. Roloff falls close by, arms reaching out.`,
      options: [
        {
          option: 'Joshua reaches out to try and save Roloff'
        },
        {
          option: 'Focus on the troll'
        }
      ]
    },
    { chapter: 19,
      choice: 'Against Roloff\'s advice, you do the show for Generous Host',
      text: 'You are rewarded well for your performance. As you walk back into town, you see Roloff outside a bar.',
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
      text: `* Joshua now has enough money for suplies & they agree to spend another night in the tavern to raise money for supplies, then set off the next morning.
      * They see the mercenaries on the road. They ask Joshua & Roloff if they've seen anything. Joshua lies to them & hopes Roloff will go along with his story.
      * Fortunately for Joshua, he does & they carry on together.
      * A few days later, you are crossing a bridge when it gives way beneath you. A troll comes and pulls you to safety as Roloff falls passed. or not?`,
      options: [
        {
          option: 'Joshua reaches out to try and save Roloff'
        },
        {
          option: 'Focus on the troll'
        }
      ]
    },
    { chapter: 21,
      choice: 'Joshua sneaks away without being seen',
      text: `* Joshua leaves town to get a head start on the road.
      * A few days later he sees bandits and starts to run. They see him too and begin to chase.
      * Joshua is nearly caught when he sees Capt. Tomas' mercenaries charging in
      * Before they are close enough to save him, Joshua is struck down. He casts a weak illusion spell to try and give him just a few moments longer.
      * A strange power causes the trees around Joshua strike out at the bandits, driving them back long enough for the mercenaries to arrive.
      * One of the mages asks you to cancel the spell`,
      options: [
        {
          option: 'Joshua doesn\'t bother trying to restrain the magic',
          id: 30
        },
        {
          option: 'Joshua knows the spell is not his but tries to restrain it anyway',
          id: 34
        }
      ]
    },
    // SOLO ROUTE(clean conscience) either doing the show or not leads you onto the road a few days later. You meet the mercenaries on the road & they announce that they are travelling the same way as you but must stop and see BARON first. You make your excuses and say you'll see them on the trail. You are chased off a cliff by mercenaries when a daemon pops out to save you, unfortunately dumping you at the feet of the MERCENARIES. You choose to kill them all (30) joining SOLO ROUTE(dirty conscience) or tell the truth (31) and join MERCENARY ROUTE.
    { chapter: 22,
      choice: 'You decided to do the show',
      text: `* Joshua is well rewarded for his performance, but on his way back to town he is attacked by muggers.
      * Too hurt to leave town, Joshua takes a room at a local inn.
      * He meets the mercenaries the next morning and they ask if he want to go with them. Joshua declines.
      * A few days later he's chased off a cliff by a bear.
      * A strange creature appeares, snatching him out of the air and dropping him on the path, apparently to eat him, just as the mercenaries come around the corner.`,
      options: [
        {
          option: 'Joshua doesn\'t try to control the strange creature',
          id: 30
        },
        {
          option: 'Joshua tries to control the strange creature, knowing he\'ll have to explain to the mercenaries',
          id: 31
        },
        {
          option: 'Joshua tries to control the strange creature but decides to try and convince the mercenaries he doesn\'t know anything',
          id: 34
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
      text: `* JOSHUA's power is released & eventually he is confronted by the other wizards & mercenaries.
      * He has to decide to tell the truth or try and lie his way through.`,
      options: [
        {
          option: 'He decides to tell the truth',
          id: 26
        },
        {
          option: 'He decides to lie',
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
      choice: 'Joshua decides to tell the truth',
      text: `* The mercenaries admit to having worked with much worse & say they'll keep his secret.
      * Eventually the party reaches Karhold and they bid him luck.
      * Joshua must choose to seek out the necromancers or the magician's guild.`,
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
      choice: 'Joshua decides to lie',
      text: `* They can't prove it either way.
      * In the next attack one of the wizards throws a spell at you & then a fireball.
      * A strange power comes out and kills the bandits while the mercenaries pull back.
      * Choose to kill them all or just the enemy, knowing he will have to explain if he doesn't kill them.`,
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
      choice: 'Joshua is forced to admit the truth',
      text: `* They're angry he lied but agree that they won't turn him in, if he helps them out.
      * Joshua have no choice but to agree & are hit with near-deadly spells each time they go into conflict.
      * Eventually they reach Karhold. Two of the magicians try to sell Joshua to the necromancers but he's saved by Capt Tomas.
      * Choose to go to Magician's guild or necromancers`,
      options: [
        {
          option: 'Choose to go to the necromancers',
          id: 36
        },
        {
          option: 'Choose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 29,
      choice: 'Joshua decides to let the power loose',
      text: `* The magicians had laid a trap! They knew he might do this all along & Joshua is hit with healing spells until the demons leave.
      * He is then chained for the journey to Karhold where the mercenaries sell him to the necromancers`,
      options: [
        {
          option: 'Sold to the necromancers',
          id: 35
        }
      ]
    },
    //END SOLO ROUTE(clean conscience) Joshua is chased off a cliff by a bear, saved by a winged demon & dumped in front of the mercenaries () . Choose to kill them all or tell the truth. If you kill them all you visit the NECROMANCERS/MAGICIANS, if you try and explain you\'re sold to the NECROMANCERS.
    { chapter: 30,
      choice: 'Joshua doesn\'t even try to restrain the strange power.',
      text: `* The creature lashes out and kills the mercenaries as they try to approach
      * Joshua  makes it... barely. He keeps on to Karhold.
      * On arrival he knows he must either go the Magician's Guild or the Necromancers.`,
      options: [
        {
          option: 'Joshua chose to go to the necromancers',
          id: 36
        },
        {
          option: 'Joshua chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 31,
      choice: 'Joshua is able to control the creature',
      text: `* The wizards in the mercenary group have questions and Joshua has no choice but to answer truthfully.
      * Captain Tomas agrees to keep Joshua's secret for now if he helps them out.
      * Joshua has no choice and is hit by near-deadly spells each time they go into a skirmish against the bandits.
      * Eventually they reach city B. Two of the magicians sell him to the necromancers.`,
      options: [
        {
          option: 'Joshua was sold to the necromancers',
          id: 35
        }
      ]
    },

    //CARAVAN ROUTE(BARON) the CARAVAN arrives at BARON's town and you are asked to perform(15). Either you agree (32) or refuse (33) either way you are forced onto the road on your own.
    { chapter: 32,
      choice: 'Joshua decided to do the show',
      text: `* Joshua is well rewarded for his performance, but on his way back to town he is attacked by muggers.
      * Too hurt to leave town, Joshua takes a room at a local inn.
      * The Caravan left without him and someone told the city watch that he might be involved with the dark magic that attacked the bandits.
      * Joshua is held, only for word of a new attack taking place while he was imprisoned. He is released & set off.
      * A bridge gives way underneath him but a mountain troll snatches Joshua out of the air, carrying him to the road just as the MERCENARIES come in to view.`,
      options: [
        {
          option: 'Joshua tries to control the troll and decides to tell the truth',
          id: 39
        },
        {
          option: 'Joshua tries to control the troll and decides to lie to the mercenaries'

        },
        {
          option: 'Joshua doesn\'t try to control the troll'

        }
      ]
    },
    { chapter: 33,
      choice: 'You decided not to do the show',
      text: `* The Baron loses his friendly veneer & kicks Joshua out of the town just before the gates close.
      * He has no choice but to spend a cold night on the road before continuing on his journey alone
      * A bridge gives way underneath him but a mountain troll snatches Joshua out of the air, carrying him to the road just as the MERCENARIES come in to view.`,
      options: [
        {
          option: 'Joshua tries to control the troll'

        },
        {
          option: 'Joshua doesn\'t try to control the troll'

        }
      ]
    },

    // END MERCENARY ROUTE, sold to the necromancers
    { chapter: 34,
      choice: 'Joshua manages to convince the mercenaries he has nothing to do with the attacks',
      text: `* Some of the mercenaries are suspicious, but they make it to City B without further issue.
      * You stay a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but you are kidnapped by 2 of the mercenaries and sold to the necromancers.`,
      options: [
        {
          option: 'Joshua was sold to the necromancers',
          id: 35
        }
      ]
    },

    //---------------------CITY B
    // NECROMANCERS(CHAINED)
    { chapter: 35,
      choice: 'Sold to the necromancers',
      text: `* The necromancers demand an explanation.
      * Joshua tells them how in his time at the college he was the victim of a prank by another student which ended with Joshua being a portal for a demon.
      * The demon now has no interest in Joshua other than as a portal by which it can look in on the world, hence saving Joshua when he's in mortal peril but otherwise not caring in the slightest.
      * Joshua is locked in a cell while they try to make a decision. He wonders how he'll be able to get out of this mess when he hears a rumbling voice...`,
      options: [
        {
          option: 'Next chapters coming!'
        }
      ]
    },
    // NECROMANCERS(FREE)
    { chapter: 36,
      choice: 'You chose to go to the necromancers',
      text: `* The necromancers demand an explanation.
      * Joshua tells them how in his time at the college he was the victim of a prank by another student which ended with Joshua being a portal for a demon.
      * The demon now has no interest in Joshua other than as a portal by which it can look in on the world, hence saving Joshua when he's in mortal peril but otherwise not caring in the slightest.
      * The necromancers think they might be able to teach Joshua how to better control his powers`,
      options: [
        {
          option: 'Next chapters coming!'
        }
      ]
    },
    // MAGICIAN'S GUILD(FREE)
    { chapter: 37,
      choice: 'You chose to go to the magician\'s guild',
      text: `* The magicians demand an explanation.
      * Joshua tells them how in his time at the college he was the victim of a prank by another student which ended with Joshua being a portal for a demon.
      * The demon now has no interest in Joshua other than as a portal by which it can look in on the world, hence saving Joshua when he's in mortal peril but otherwise not caring in the slightest.
      * Joshua is locked in a cell while they try to make a decision. He wonders how he'll be able to get out of this mess when he hears a rumbling voice...`,
      options: [
        {
          option: 'Next chapters coming!'
        }
      ]
    },

    // TRAVELLER ROUTE after BARON's town, you were crossing a bridge which collapsed. You were pulled from the water by a daemon and had to choose to save TRAVELLER() or let him die(). Either way you are dumped in front of the mercenaries.
    { chapter: 38,
      choice: 'Joshua doesn\'t bother saving TRAVELLER',
      text: `* Some of the mercenaries are suspicious, but they make it to Karhold without further issue.
      * Joshua stays a final night with the mercenaries before deciding whether to go to the necromancers or the magicians, but is kidnapped by 2 of the mercenaries and sold to the necromancers.`,
      options: [
        {
          option: 'Joshua was sold to the necromancers',
          id: 35
        }
      ]
    },
    { chapter: 39,
      choice: 'Joshua saves Roloff & spares the mercenaries, deciding to tell the truth.',
      text: `* Joshua has explains to the mercenaries about his ailment.
      * They agree to keep his secret for now if he helps them out.
      * They attack the bandits camp and Joshua is hit by spells that force the power to be released.
      * Eventually they reach Karhold. Two of the magicians try to sell Joshua to the necromancers but Roloff saves him.
      * Joshua asks his advice & he recommends the NECROMANCERS.`
      ,
      options: [
        {
          option: 'Joshua chose to go to the necromancers',
          id: 36
        },
        {
          option: 'Joshua chose to go to the magician\'s guild',
          id: 37
        }
      ]
    },
    { chapter: 39,
      choice: 'Joshua saves Roloff & but considers the mercenaries a threat.',
      text: `* Joshua somehow manages to survive with Roloff, but the mercenaries are all dead.
      * Now he can try and help Roloff recover. Eventually they both make it to Karhold & Joshua asks Roloff for his advice`,
      options: [
        {
          option: 'Joshua chose to go to the necromancers',
          id: 36
        },
        {
          option: 'Joshua chose to go to the magician\'s guild',
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
