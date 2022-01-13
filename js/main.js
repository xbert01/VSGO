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
/*
let car.id = Math.random() * 5;

let cars = cars[Math.floor(Math.random() * cars.length)];
*/