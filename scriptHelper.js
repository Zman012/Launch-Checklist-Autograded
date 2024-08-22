// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {

    const str = String(testInput).trim() //created str because if logic included .trim() to check for a number it would not work - trim is a method for only strings

    if (str === "") {
        return 'Empty';
    } if (isNaN(Number(testInput))) {
        return 'Not a Number';
    } else
        return "Is a Number"

}
// console.log(validateInput(""))

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotStatus").innerHTML = `Pilot": ${pilot} is ready for launch`
    document.getElementById("copilotStatus").innerHTML = `Co-pilot: ${copilot} is ready for launch`



    if (fuelLevel < 10000) {
        console.log("Test");
        document.getElementById("faultyItems").style = "visble"
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.backgroundColor = "red"
    }

    if (cargoLevel > 10000) {
        document.getElementById("faultyItems").style = "visble"
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.backgroundColor = "red"
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;