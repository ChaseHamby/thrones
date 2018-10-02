import {printToDom } from "../helpers/util.js";

const characters = [
    {
        name: 'Ned Stark',
        house: 'Stark',
        image: 'https://vignette.wikia.nocookie.net/p__/images/6/64/IMG_6734.jpg/revision/latest?cb=20170914162623&path-prefix=protagonist'
    },
    {
        name: 'Jaime Lannister',
        house: 'Lannister',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg/220px-Jaime_Lannister-Nikolaj_Coster-Waldau.jpg'
    },
    {
        name: 'John Snow',
        house: 'Stark',
        image: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
    },
    {
        name: 'Cersei Lannister',
        house: 'Lannister',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF86yeMCVvJRGOLslF0ZLpb2GrXWbUbpv8olFoCxMJgdMfSd7q'
    }
]

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <h6 class="card-house">${character.house}</h6>
          <img src="${character.image}">
        </div>
      </div>`
    })
    printToDom(domString);
}

export {characterBuilder};