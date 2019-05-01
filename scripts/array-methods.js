const planetEl = document.getElementById("planets")
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// Run a forEach method on the planets to log pag and append each planet to the DOM.
planets.forEach(planet => {
    // innerHTML to append each planet
    planetHtml = `<h3>${planet}</h3>
                <hr>`

    planetEl.innerHTML += planetHtml;
});

let newPlanetArray = [];

// The map method to create a new array with toUpperCase method to capitalize the first character of each element.
const planetArray = planets.map(planet => {

    newPlanetArray.push(planet.charAt(0).toUpperCase() + planet.substr(1));
    console.log(newPlanetArray)

    return newPlanetArray
});

// Use a filter method to check and log all elements to log all elements that includes() the letter "E"
let ePlanet = planets.filter(planet => {
    let ePlanet = false;
    // Conditional statement that'll check true to all elements that have the letter "E" in it.
    if (planet.includes("e")) {
        ePlanet = true;
        console.log(planet.toUpperCase())
    }
    return ePlanet
});