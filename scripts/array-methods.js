const planetEl = document.getElementById("planets")
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(planet => {

    planetHtml = `<h3>${planet}</h3>
                <hr>`

    planetEl.innerHTML += planetHtml;
});

let newPlanetArray = [];
const planetArray = planets.map(planet => {

    newPlanetArray.push(planet.charAt(0).toUpperCase() + planet.substr(1));
    console.log(newPlanetArray)

    return newPlanetArray
});

let ePlanet = planets.filter(planet => {
    let ePlanet = false;

    if (planet.includes("e")) {
        ePlanet = true;
        console.log(planet.toUpperCase())
    }
    return ePlanet
});