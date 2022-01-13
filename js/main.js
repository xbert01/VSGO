cd
let _allCars = [];
/*
Fetches json data from the file cars.json
*/

async function fetchCars() {
    let response = await fetch('json/cars.json');
    let data = await response.json();
    _allCars = data;
    appendCars(_allCars);
}

fetchCars();

/*
Appends json data to the DOM
*/
function appendCars(cars) {
    let htmlTemplate = "";
    for (let car of cars) {
        if (car.id === "1") {
            htmlTemplate += /*html*/ `
            <div 
            class = "car-random">
                    <img src=${car.img} class = "car-background">

                    <img src=${car.logo}>
                    <br>
                    <div class="car-name-container">
                    <h3>${car.model}</h3>
                    <h3>${car.type}</h3>
                    </div>
                    <br>
                    <h2>${car.year}</h2>    
            </div>
        `;
        }
        document.querySelector(".car-left").innerHTML = htmlTemplate;
        document.querySelector(".car-right").innerHTML = htmlTemplate;
    }
}



/* 
Selects a random element from JSON
*/
$.getJSON('json/cars.json').done(function (data) {
    window.questionnaire = data;
    console.log(window.questionnaire);
    startGame();
});

function pickRandomQuestion() {
    window.selectedquestion = window.questionnaire[Math.floor(Math.random * window.questionnaire.length)];
    console.log(window.selectedquestion);
    console.log(window.questionnaire);
}