const nouns = [
  "teddy bear",
  "boogeyman",
  "billy goat",
  "tabby cat",
  "supernatural being",
  "voodoo doll",
  "gargoyle",
  "theatrical production",
  "carnival game",
  "road-kill",
];
const verbs = [
  "zapping",
  "leaping",
  "growling",
  "advising",
  "climbing",
  "painting",
  "stealing",
  "traveling",
  "dripping",
  "poisoning",
];

//function to select the NOUN from the array
let randomNoun = (nouns) => {
  return nouns[Math.floor(Math.random() * nouns.length)];
};

//function to select the VERB from the array
let randomVerb = (verbs) => {
  return verbs[Math.floor(Math.random() * verbs.length)];
};

//function to create a random HEX color value
let mainColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, "0")
  );
};

//Returns the final message
let drawingPrompt = () => {
  const firstWord = document.getElementById("noun");
  const secondWord = document.getElementById("verb");
  const thirdWord = document.getElementById("color");
  const image = document.createElement("img");
  const image2 = document.createElement("img");
  const imageSquare = document.getElementById("nounImageBlock");
  const imageSquare2 = document.getElementById("verbImageBlock");
  const colorSquare = document.getElementById("colorBlock");

  firstWord.innerHTML = randomNoun(nouns);
  secondWord.innerHTML = randomVerb(verbs);
  thirdWord.innerHTML = mainColor();
  image.id = "Id";
  image2.id = "Id";
  image.className = "class";
  image2.className = "class";
  //image.src = "./images/";
  imageSquare.appendChild(image);
  imageSquare2.appendChild(image2);
  colorSquare.style.backgroundColor = thirdWord.innerHTML;

  if (nouns) {
    image.src = `./images/${firstWord.innerHTML}.png`;
  }

  if (verbs) {
    image2.src = `./images/${secondWord.innerHTML}.png`;
  }
};
window.onload = drawingPrompt;
