//CodeCademy JAVASCRIPT SYNTAX, PART II

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");
console.log(`-There are ${storyWords.length} total words in this story.`);

//removing unnecessary words
//could probably refactor this into a shorter line (filter?) but keeping it simple
let betterWords = []
function checkUnnecessary(word){
  if ((!unnecessaryWords.includes(word))){ //using ! to negate the includes
    betterWords.push(word);
  }
}
storyWords.forEach(checkUnnecessary);


//counting overused words
//I am sure there's a better way to do this but idk how yet :(
// e.g. have to be able to loop thru array that may be of undetermined length and match words + counts
let word0count = 0
let word1count = 0
let word2count = 0
betterWords.forEach(word => {
  if (word === overusedWords[0]){
    return word0count++;
  }
  else if (word === overusedWords[1]){
    return word1count++;
  }
  else if (word === overusedWords[2]){
    return word2count++;
  }
});

console.log(`-You used ${overusedWords[0]} a total of ${word0count} times.`);
console.log(`-You used ${overusedWords[1]} a total of ${word1count} times.`);
console.log(`-You used ${overusedWords[2]} a total of ${word2count} times.`);

//count sentences
let countEnds = 0;
betterWords.forEach(word =>{
  for (let letter of word){
    if (['!','.','?'].includes(letter)){
      countEnds++;
    }
  }
});

console.log(`-There are a total of ${countEnds} sentences in this paragraph.`);

console.log(`Here's the the story: \n ${betterWords.join(' ')}`);

