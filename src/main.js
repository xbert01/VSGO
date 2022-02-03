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

function isEven(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) return true;
    }
}

console.log(isEven(10));
fetchCars();

/*
Appends json data to the DOM
*/
function appendCars(cars) {
    let htmlTemplate = "";
    for (let car of cars) {
        if (car.id == isEven()) {
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
        document.querySelector(".single-car").innerHTML = htmlTemplate;
    }
}