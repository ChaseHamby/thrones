import {printToDom} from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

const characters = [
  {id:'character1', name: 'John Snow', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'},
  {id:'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'},
  {id:'character3', name: 'Cersei Lannister', house: 'Lannister', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355'},
  {id:'character4', name: 'Tyrion Lannister', house: 'Lannister', imageUrl: 'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg'}
];

//Function used to target the correct card info when you click it - Need this function for the create events function (click event)//
const characterClick = (e) => {
  const characterId = e.target.closest('.character-card').id;
  const currentCharacter = characters.find(x => x.id === characterId);
  detailsBuilder(currentCharacter);
};

//Function used for clicking the card and displaying it //
const createEvents = () => {
  const characterCards = document.getElementsByClassName('character-card');
  for(let i=0; i<characterCards.length; i++){
    characterCards[i].addEventListener('click', characterClick);
  }
};

// Need to use singular character in the domString since we are using the forEach method //
const charactersBuilder = () => {
  let domString = '';
  characters.forEach((character) => {
    domString += `<div class="col-2 character-card p-2" id="${character.id}">`
    domString +=   `<div class="card">`;
    domString +=    `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
    domString +=    `<div class="card-body">`;
    domString +=      `<h5 class="card-title">${character.name}</h5>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=`</div>`;
  });
  printToDom(domString);
  createEvents();
};

export {charactersBuilder};