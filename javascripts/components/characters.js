import {printToDom } from "../helpers/util.js";

const characters = [
    {
        id: 'character1',
        name: 'Ned Stark',
        house: 'Stark',
        image: 'https://vignette.wikia.nocookie.net/p__/images/6/64/IMG_6734.jpg/revision/latest?cb=20170914162623&path-prefix=protagonist'
    },
    {
        id: 'character2',
        name: 'Jaime Lannister',
        house: 'Lannister',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg/220px-Jaime_Lannister-Nikolaj_Coster-Waldau.jpg'
    },
    {
        id: 'character3',
        name: 'John Snow',
        house: 'Stark',
        image: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
    },
    {
        id: 'character4',
        name: 'Cersei Lannister',
        house: 'Lannister',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF86yeMCVvJRGOLslF0ZLpb2GrXWbUbpv8olFoCxMJgdMfSd7q'
    }
]

//Function used for clicking on card and identifying the correct character ID and info //
const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find((x => {
        return x.id === characterId
    }))
    console.log('currentCharacter',currentCharacter);
};

// Function used for clicking on card and displaying the correct info //

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i=0; i<characterCards.length; i++){
        characterCards[i].addEventListener('click', characterClick);
    }
};

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="character-card" id="${character.id}">`;
        domString += `<div class="card">`;
        domString +=  `<img class="card-img-top" src="${character.image}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString +=  `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString +=`</div>`
    });
    printToDom(domString);
    createEvents();
};

export {characterBuilder};