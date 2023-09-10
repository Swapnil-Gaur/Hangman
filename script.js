'use strict';

const letterDiv = document.querySelector('.letter-div');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hintDiv = document.querySelector('.hint-div');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');

// keeping letters using javascript
// so untill we put html content into letter-div,
// we cant capture letters
let letters;

let lives;

const words = new Map([
  ["Aardvark",'animal'],
  ["Albatross",'animal'],
  ["Alligator",'reptile'],
  ["Alpaca", 'animal'],
  ["Ant",'insect'],
  ["Anteater", 'animal'],
  ["Antelope", 'animal'],
  ["Ape",'animal'],
  ["Armadillo", 'animal'],
  ["Donkey",'animal'],
  ["Baboon",'animal'],
  ["Badger",'animal'],
  ["Barracuda",'animal'],
  ["Bat","bird"],
  ["Bear",'animal'],
  ["Beaver",'animal'],
  ["Bee","bird"],
  ["Bison",'animal'],
  ["Boar",'animal'],
  ["Buffalo",'animal'],
  ["Butterfly",'bird'],
  ["Camel", 'animal'],
  ["Capybara",'animal'],
  ["Caribou",'animal'],
  ["Cassowary",'animal'],
  ["Cat",'animal'],
  ["Caterpillar",'reptile'],
  ["Cattle",'animal'],
  ["Chamois",'animal'],
  ["Cheetah",'animal'],
  ["Chicken",'animal'],
  ["Chimpanzee",'animal'],
  ["Chinchilla",'animal'],
  ["Chough",'animal'],
  ["Clam",'animal'],
  ["Cobra","reptile"],
  ["Cockroach","insect"],
  ["Cod",'animal'],
  ["Cormorant",'animal'],
  ["Coyote",'animal'],
  ["Crab",'fish'],
  ["Crane",'bird'],
//   ["Crocodile",'reptile'],
//   "Crow",
//   "Curlew",
//   "Deer",
//   "Dinosaur",
//   "Dog",
//   "Dogfish",
//   "Dolphin",
//   "Dotterel",
//   "Dove",
//   "Dragonfly",
//   "Duck",
//   "Dugong",
//   "Dunlin",
//   "Eagle",
//   "Echidna",
//   "Eel",
//   "Eland",
//   "Elephant",
//   "Elk",
//   "Emu",
//   "Falcon",
//   "Ferret",
//   "Finch",
//   "Fish",
//   "Flamingo",
//   "Fly",
//   "Fox",
//   "Frog",
//   "Gaur",
//   "Gazelle",
//   "Gerbil",
//   "Giraffe",
//   "Gnat",
//   "Gnu",
//   "Goat",
//   "Goldfinch",
//   "Goldfish",
//   "Goose",
//   "Gorilla",
//   "Goshawk",
//   "Grasshopper",
//   "Grouse",
//   "Guanaco",
//   "Gull",
//   "Hamster",
//   "Hare",
//   "Hawk",
//   "Hedgehog",
//   "Heron",
//   "Herring",
//   "Hippopotamus",
//   "Hornet",
//   "Horse",
//   "Human",
//   "Hummingbird",
//   "Hyena",
//   "Ibex",
//   "Ibis",
//   "Jackal",
//   "Jaguar",
//   "Jay",
//   "Jellyfish",
//   "Kangaroo",
//   "Kingfisher",
//   "Koala",
//   "Kookabura",
//   "Kouprey",
//   "Kudu",
//   "Lapwing",
//   "Lark",
//   "Lemur",
//   "Leopard",
//   "Lion",
//   "Llama",
//   "Lobster",
//   "Locust",
//   "Loris",
//   "Louse",
//   "Lyrebird",
//   "Magpie",
//   "Mallard",
//   "Manatee",
//   "Mandrill",
//   "Mantis",
//   "Marten",
//   "Meerkat",
//   "Mink",
//   "Mole",
//   "Mongoose",
//   "Monkey",
//   "Moose",
//   "Mosquito",
//   "Mouse",
//   "Mule",
//   "Narwhal",
//   "Newt",
//   "Nightingale",
//   "Octopus",
//   "Okapi",
//   "Opossum",
//   "Oryx",
//   "Ostrich",
//   "Otter",
//   "Owl",
//   "Oyster",
//   "Panther",
//   "Parrot",
//   "Partridge",
//   "Peafowl",
//   "Pelican",
//   "Penguin",
//   "Pheasant",
//   "Pig",
//   "Pigeon",
//   "Pony",
//   "Porcupine",
//   "Porpoise",
//   "Quail",
//   "Quelea",
//   "Quetzal",
//   "Rabbit",
//   "Raccoon",
//   "Rail",
//   "Ram",
//   "Rat",
//   "Raven",
//   "Red deer",
//   "Red panda",
//   "Reindeer",
//   "Rhinoceros",
//   "Rook",
//   "Salamander",
//   "Salmon",
//   "Sand Dollar",
//   "Sandpiper",
//   "Sardine",
//   "Scorpion",
//   "Seahorse",
//   "Seal",
//   "Shark",
//   "Sheep",
//   "Shrew",
//   "Skunk",
//   "Snail",
//   "Snake",
//   "Sparrow",
//   "Spider",
  ["Spoonbill",'animal'],
  ["Squid",'animal'],
  ["Squirrel",'animal'],
  ["Starling",'animal'],
  ["Stingray",'animal'],
  ["Stinkbug",'animal'],
  ["Stork",'animal'],
  ["Swallow",'animal'],
  ["Swan",'bird'],
  ["Tapir",'animal'],
  ["Tarsier",'animal'],
  ["Termite",'animal'],
  ["Tiger",'animal'],
  ["Toad",'animal'],
  ["Trout",'animal'],
  ["Turkey","animal"],
  ["Turtle","animal"],
  ["Viper","animal"],
  ["Vulture","animal"],
  ["Wallaby","animal"],
  ["Walrus","animal"],
  ["Wasp","animal"],
  ["Weasel", "animal"],
  ["Whale", "fish"],
  ["Wildcat","animal"],
  ["Wolf","animal"],
  ["Wolverine", "animal"],
  ["Wombat",'animal'],
  ["Woodcock",'bird'],
  ["Woodpecker","bird"],
  ["Worm","reptile"],
  ["Wren",'animal'],
  ["Yak",'animal'],
  ["Zebra",'animal'],
]);

// making a list of only keys from words
const word_list = [...words.keys()];

// get random word from word_list function
const getRandomWord = function (list) {
  return list[Math.floor(Math.random() * word_list.length)];
};

// random word will be selected upon every reset and init
let select_word;

const init = function (state) {
  wordDiv.innerHTML = '';
  if (state === 'start') {
    // putting all letters into html
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);
    }
  } else if (state === 'reset') {
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      hintDiv.classList.add('hidden');
      notif.classList.add('hidden');
    });
  }
  select_word = getRandomWord(word_list);
  lives = 5;

  // capturing letters div
  letters = document.querySelectorAll('.alpha');
  liveSpan.textContent = lives;

  // putting selected word
  for (let i = 0; i < select_word.length; i++) {
    const html = `<p class="word">_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
  }
};
// initializing the page
init('start');

// show notification
const showNotif = function (msg) {
  notif.classList.remove('hidden');
  notifSpan.textContent = select_word;
  notifContent.textContent = `You ${msg}`;
  // lives = 3;
};

// decrease life
const decreaseLife = function () {
  lives--;
  //   console.log(lives);
  liveSpan.textContent = lives;
  if (lives === 0) {
    showNotif('lost');
  }
};

// get multiple matching indexes of pressed letter
// to the selected word
const getindexes = function (letter) {
  let indexes = [];
  [...select_word].forEach((val, i) => {
    if (val === letter) {
      const index = i;
      indexes.push(index);
    }
  });
  //   console.log(indexes);
  return indexes;
};

// check if we get complete word
const checkWord = function () {
  let val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent === '_') {
      val = false;
    }
  }
  return val;
};

// letters event listener function
const letterPress = function () {
  const letter = this.textContent.toLowerCase();

  if (select_word.includes(letter)) {
    const indexes_list = getindexes(letter);
    indexes_list.forEach((val, i) => {
      wordDiv.children[val].textContent = this.textContent;
    });
    if (checkWord()) showNotif('won');
  } else {
    decreaseLife();
  }
  this.classList.add('disabled');
};

// listening to letter buttons presses
letters.forEach(btn => {
  btn.addEventListener('click', letterPress);
});

// Listening to hint btn
hintButton.addEventListener('click', function () {
  hintDiv.classList.remove('hidden');
  hintText.textContent = words.get(select_word);
});

// listening to reset btn
resetButton.addEventListener('click', function () {
  init('reset');
});

// listening to play again button
playAgain.addEventListener('click', function () {
  init('reset');
});