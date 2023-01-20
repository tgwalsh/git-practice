const nouns = ['teddy bear', 'boogeyman', 'billy goat', 'tabby cat', 'supernatural being', 'voodoo doll', 'gargoyle', 'theatrical production', 'carnival game', 'road-kill'];
const verbs = ['zapping', 'leaping', 'growling', 'advising', 'climbing', 'painting', 'stealing', 'traveling', 'dripping', 'poisoning'];


//function to select the NOUN from the array
let randomNoun = (nouns) => {
    return nouns[Math.floor(Math.random () * nouns.length)];
};

//function to select the VERB from the array
let randomVerb = (verbs) => {
    return verbs[Math.floor(Math.random () * verbs.length)];
};

//function to create a random HEX color value
let mainColor = () => {
    let designColor = (Math.random() * 0xffff * 1000000).toString(16);
    return '#' + designColor.slice(0, 6);
};

//Returns the final message
let drawingPrompt = prompt => {
    console.log (`For today’s drawing, draw a ${randomNoun(nouns)} that is ${randomVerb(verbs)}. Try to incorporate ${mainColor()} as the main color of your design.`);
}
drawingPrompt();

