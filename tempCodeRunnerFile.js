// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]")
        let cargoMass = document.querySelector("input[name=cargoMass]")

        let pilotValidation = validateInput(pilotName);
        let copilotValidation = validateInput(copilotName);
        let fuelValidation = validateInput(fuelLevel);
        let cargoValidation = validateInput(cargoMass);

        if (pilotValidation === 'Empty' || copilotValidation === 'Empty' || fuelValidation === 'Empty' || cargoValidation === 'Empty') {
            alert("All fields are required!");
            event.preventDefault();
        } else if (pilotValidation === 'Not a Number' || copilotValidation === 'Not a Number' || fuelValidation === 'Not a Number' || cargoValidation === 'Not a Number') {
            alert("Fuel Level and Cargo Mass must be numbers!");
            event.preventDefault();
        } else {
            // Call formSubmission with valid data
            formSubmission(document, [], pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
        }
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});