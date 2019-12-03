# storytime
A choose your own adventure story

To get it running, download or clone this repository.

run `mongod` 

`yarn serve:back`

`yarn seed`

`yarn yarn serve:front`


## About
This passion project was inspired by a friends character sheet for a game of D&D. The idea behind the app is to make a simple choose your own ending story - each chapter has an array of choices which feed the user down a particular story arc.

## Approach
I began by building a small seeds file of 10 chapters and building a front end to display each chapter. Once the home page and first chapter were displaying correctly, I introduced the logic to handle the reader's choices.
Further additions were the navbar and footer, with links to social media and the home page.

## Challenges
While not inherently difficult, there were some aspects of this project which needed me to rethink my approach.
### Chapter choices
I initially had the choices for each chapter as an array of chapter id/numbers - when the user came to a new chapter, an axios request was placed for the current chapter information and further requests for each choice, bringing back the full chapter information for each choice as well. This meant multiple requests returning a huge amount of information that wasn't being used and also required a significant duplication of information in my seeds file, which became confusing and unweildy.

I changed the schema to have each choice as a key/value pair with the chapter number as the id and the choice text (to be displayed on the previous chapter as 'choice text' at the bottom of each chapter). When the user makes a choice for the story arc, the NextChapter sparks a new API request based on the next chapter number and renders the new information, including a new array of choice texts.

This meant I was making a single API request per chapter, rather than multiple requests. It had the added advantage of meaning I could more easily display the choice text and made including a summary of the previous choice on each chapter much simpler.


### Importing style sheets
After some initial problems importing stylesheets (possibly a typo, possibly something else) I was able to rectify the issue and subsequently separate out the key components that needed styling. I feel this significantly improves readability for the styling component of this app.