import {printToDom} from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

let characters = [];

// Use this function below in tandem with characters.js function //
const setCharacters = (newArray) => {
    characters = newArray;
};

const getCharacterz = () => {
    return characters;
}

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
const charactersBuilder = (charactersArray) => {
  let domString = '';
  charactersArray.forEach((character) => {
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

export {charactersBuilder, setCharacters, getCharacterz};