import {setCharacters, charactersBuilder} from '../components/characters.js'

//Two functions below must not be written in ES6 //

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();
}

function executeThisCodeIfXhrFails () {
    console.log('shit broke');
}

// Main XHR function below - use it everytime //

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

// Copy this code above and use it for everything - did I repeat myself? //

export {getCharacters};