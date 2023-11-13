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
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    };
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields required.");
    } else { 

        let readyForLaunch = true;

        //pilot check
        if (validateInput(pilot) === "Is a Number") {
            window.alert("Pilot selection invalid.");
            readyForLaunch = false;
        } else {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        }
        
        //copilot check
        if (validateInput(copilot) === "Is a Number") {
            window.alert("Co-pilot selection invalid.");
            readyForLaunch = false;
        } else {
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        
        //fuel check
        if (validateInput(fuelLevel) === "Not a Number") {
            window.alert("Fuel level must be a number.");
            readyForLaunch = false;
        } else if (Number(fuelLevel) < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            readyForLaunch = false;
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        //cargo check
        if (validateInput(cargoLevel) === "Not a Number") {
            window.alert("Cargo mass must be a numerical value.");
            readyForLaunch = false;
        } else if (Number(cargoLevel) > 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            readyForLaunch = false;
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        //final launch check
        if (readyForLaunch === true) {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
        } else {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        }
    } 
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
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





