# Thrones

## Description

A Game of Thrones site where you can sort characters based on their house. You can click 'All' and it wil display all of the characters. You can click 'Stark' and it will display only characters from the Stark house. Additionally, when I click on a character, it should show the single character and include the name of their house. There should be a rex X above them that I can click on and it will return to the original list of characters.

## Screenshots
<img width="1440" alt="screen shot 2018-10-06 at 10 52 22 am" src="https://user-images.githubusercontent.com/16019344/46573136-406c2600-c956-11e8-8263-da5dc567483f.png">
<img width="1434" alt="screen shot 2018-10-06 at 10 52 29 am" src="https://user-images.githubusercontent.com/16019344/46573139-43671680-c956-11e8-84e3-3749ef3e2958.png">
<img width="1136" alt="screen shot 2018-10-06 at 10 59 20 am" src="https://user-images.githubusercontent.com/16019344/46573177-ec157600-c956-11e8-993d-20a5ee10f02f.png">


## Setup

**Project has the following folders:**
```
|- db
    |- characters.json
|- javascripts
    |- main.js [Entry point/start application]
    |- components
        |- characters.js [character builder]
        |- details.js [Attaching all event listeners]
    |- data
        |- charactersData.js [XHR call for characters.json]
    |- helpers
        |- util.js [print to DOM function]
|- index.html
|- main.css
```

**Install via CDN:**

- jQuery
- Bootstrap

## Requirements

- As a user, I want to see a listing of several Game of Thrones character. Each character should have a card that has all this data {image, name, house}
- As a user, I should be able to click on a card and it display the single card in a larger format and display their house.
- As a user, I want to see 2 category(type) buttons printed at the top of the page. Each should be a different color. These can be hard-coded.
- I want to be able to click one of the 2 buttons, then only the cards that are in the category(type) should show.
- There should be some way for the user to unfilter the results.

## Technical Requirements

- You should be using Bootstrap.
- You should be using ES6 modules.
- Your code should be clean and readable, with single responsibility principle.