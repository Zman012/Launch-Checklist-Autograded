// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("[name=pilotName]").value;
        let copilotName = document.querySelector("[name=copilotName]").value;
        let fuelLevel = document.querySelector("[name=fuelLevel]").value
        let cargoMass = document.querySelector("[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");




        let pilotValidation = validateInput(pilotName);
        let copilotValidation = validateInput(copilotName);
        let fuelValidation = validateInput(fuelLevel);
        let cargoValidation = validateInput(cargoMass);




        if (pilotValidation === 'Empty' || copilotValidation === 'Empty' || fuelValidation === 'Empty' || cargoValidation === 'Empty') {
            alert("All fields are required!");
            event.preventDefault();
        } else if (fuelValidation === 'Not a Number' || cargoValidation === 'Not a Number') {
            alert("Fuel Level and Cargo Mass must be numbers!");
            event.preventDefault();
        } else if (fuelValidation === 'Is a Number' || cargoValidation === 'Is a Number') {
            formSubmission(document,list, pilotName, copilotName, fuelLevel, cargoMass);
            
            event.preventDefault();
        }
    });


    let listedPlanets;
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document, 
            selectedPlanet.name, 
            selectedPlanet.diameter, 
            selectedPlanet.star, 
            selectedPlanet.distance, 
            selectedPlanet.moons, 
            selectedPlanet.imageUrl
        );
    })

});