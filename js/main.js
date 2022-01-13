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
        if (car.id === Math.floor(Math.random() * 10)) {
            htmlTemplate += /*html*/ `
            <div style = "background: url('${car.img }') no-repeat center;   background-size: cover;"
            class = "car-random">
                    <img src=${car.logo}>
                    <br>
                    <div class = "car-name-container" >
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
/*let car.id = Math.random() * 5;

let cars = cars[Math.floor(Math.random() * cars.length)];

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

$.getJSON('js/cars.json').done(function (data) {
    window.questionnaire = data;
    window.questionnaire.sort(function () {
        return .5 - Math.random();
    });
    console.log(window.questionnaire);
    startGame();
});

function pickRandomQuestion() {
    var obj_keys = Object.keys(window.questionnaire);
    var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    window.selectedquestion = window.questionnaire[ran_key];
    console.log(window.selectedquestion);
    console.log(window.questionnaire);
}