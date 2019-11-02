var data;
var sprite;
var input;
var val;
var buttonSub;
var buttonNext;
var buttonPrev;
var wallpaper;
var pokeFont;
// var unownFont;
var checkFont;
var textbox;
// var dropDown;
var info = [];



function preload() {
  data = loadJSON('pokedex.json');
  wallpaper = loadImage('./assets/wallpaper.png');
  textbox = loadImage('./assets/textbox.png');
  pokeFont = loadFont('./assets/PokemonGB.ttf');
  // unownFont = loadFont('./assets/PokemonUnownGB.ttf');
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  var poke = data.pokemon;
  for (var i = 0; i < 151; i++) {
    info.push(poke[i].id, poke[i].name, poke[i].types, poke[i].description);
  }
  //create the input to search the pokemon
  input = createInput("Write the name of Pokemon here...");
  input.position(20, 65);
  //create search bar
  buttonSub = createButton('submit');
  buttonSub.position(input.x + input.width + 10, 65);
  buttonSub.style('font-family: pokeFont');
  buttonSub.mousePressed(pokeSub);
  //button for next and prev pokemon
  buttonNext = createButton('NEXT');
  buttonPrev = createButton('PREV');
  buttonNext.position(windowWidth / 2 + 380, windowHeight / 4);
  buttonPrev.position(windowWidth / 2 - 400, windowHeight / 4);
  buttonNext.style('font-family: pokeFont');
  buttonPrev.style('font-family: pokeFont');
  buttonNext.mousePressed(pokeNext);
  buttonPrev.mousePressed(pokePrev);
  //switch language
  // dropDown = createSelect();
  // dropDown.position(windowWidth / 2 + 380, windowHeight / 2 + 162.5);
  // dropDown.style('font-family: pokeFont');
  // dropDown.option("English");
  // dropDown.option("Unown");
}

function draw() {
  //write information of the pokemon
  textAlign(CENTER);
  textFont(pokeFont);
  fill('black');
  textSize(20);
  // #id pokemon
  text(info[val - 1], windowWidth / 2 + 3, windowHeight / 2 + 10);
  //type pokemon
  text("Type: " + info[val + 1], windowWidth / 2, windowHeight / 2 + 230);
  //name pokemon
  text(info[val], windowWidth / 2, windowHeight / 2 + 180);
  //description pokemon
  textAlign(LEFT);
  text(info[val + 2], windowWidth / 2 - 330, windowHeight / 2 + 315, textbox.width / 2 - 100, textbox.height / 2);

  // if(pokeName) {
  //   if(dropDown.value() == "Unown") {
  //     textFont(unownFont);
  //   }
  // }
  // text(info[val], windowWidth / 2, windowHeight / 2 + 180);
  //name pokemon
  // var name = createDiv(info[val]);
  // name.position(windowWidth / 2 - 80, windowHeight / 2 + 180);
  // name.style("font-family: pokeFont");
  // name.style("font-size: 20px");
  // pokeName();
}

function pokeSub() {
  for (var i = 1; i < info.length; i += 4) {
    if (input.value() == info[i]) {
      val = i;
      break;
    }
  }
  image(wallpaper, windowWidth / 2 - 10, windowHeight / 2 - 10, 1940, 1220);
  image(textbox, windowWidth / 2, windowHeight / 2 + 390, 815, 315);
  loadImage('./assets/front/' + info[i - 1] + '.png', sprite => {
    image(sprite, windowWidth / 2, windowHeight / 2 - 300, 400, 400);
  })
}

function pokeNext() {
  if (val <= 600) {
    val += 4;
    image(wallpaper, windowWidth / 2 - 10, windowHeight / 2 - 10, 1940, 1220);
    image(textbox, windowWidth / 2, windowHeight / 2 + 390, 815, 315);
    loadImage('./assets/front/' + info[val - 1] + '.png', sprite => {
      image(sprite, windowWidth / 2, windowHeight / 2 - 300, 400, 400);
    });
  }
}

function pokePrev() {
  if (val >= 2) {
    val -= 4;
    image(wallpaper, windowWidth / 2 - 10, windowHeight / 2 - 10, 1940, 1220);
    image(textbox, windowWidth / 2, windowHeight / 2 + 390, 815, 315);
    loadImage('./assets/front/' + info[val - 1] + '.png', sprite => {
      image(sprite, windowWidth / 2, windowHeight / 2 - 300, 400, 400);
    });
  }
}

// function pokeNameEng() {
//
//   if (dropDown.value() == "English") {
//     textFont(pokeFont);
//   }
//   if (dropDown.value() == "Unown") {
//     textFont(unownFont);
//   }
//
//   textAlign(CENTER);
//   text(info[val], windowWidth / 2, windowHeight / 2 + 180);
// }
