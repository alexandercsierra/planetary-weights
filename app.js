var weightInput = document.querySelector("input");
var weightSubmit = document.querySelector("button");
var h2 = document.querySelector("h2");
var result = document.querySelector(".result");
var planet = document.querySelector("select");
var body = document.querySelector("body");
var weight = 0;

weightSubmit.addEventListener("click", function (e){
    e.preventDefault();
    var planetChoice = planet.value;
    console.log(planetChoice);
    var weight = weightInput.value;
    var newWeight = spaceWeights("Earth", weight, planetChoice);
    h2.textContent = "You would weigh " + newWeight + " pounds on " + planetChoice;
    
    //change background according to planet choice

    if (planetChoice === "Mercury"){
        body.style.background = "#000000 url('images/mercury.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Venus"){
        body.style.background = "#000000 url('images/venus.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Earth"){
        body.style.background = "#000000 url('images/earth1.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Mars"){
        body.style.background = "#000000 url('images/mars.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Jupiter"){
        body.style.background = "#000000 url('images/jupiter.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Saturn"){
        body.style.background = "#000000 url('images/saturn.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Uranus"){
        // body.style.backgroundImage = "url('images/uranus.jpg')";
        body.style.background = "#000000 url('images/uranus.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "60%";
        body.style.backgroundRepeat = "no-repeat";
    }
    if (planetChoice === "Neptune"){
        body.style.background = "#000000 url('images/neptune.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "1920px 1080px";
    }
    if (planetChoice === "Pluto"){
        body.style.background = "#000000 url('images/pluto.jpg')";
        body.style.backgroundPosition = "cover";
        body.style.backgroundSize = "100%";
        body.style.backgroundRepeat = "no-repeat";
    }
});

// weightInput.addEventListener("keypress", function (e){
//     if (e.key === 'Enter'){
//         var newWeight = spaceWeights("Earth", weightInput.value, "Jupiter");
//         console.log(newWeight);
//     }  
// });




function spaceWeights(planetA, weight, planetB) {
  var planetGravs = {
    Mercury:3.7,
    Venus:8.87,
    Earth:9.81,
    Mars:3.711,
    Jupiter:24.79,
    Saturn:10.44,
    Uranus:8.69,
    Neptune:11.15,
    Pluto: 0.62
  }
  var weight = (weight/planetGravs[planetA]) * planetGravs[planetB];
  return Number(weight.toFixed(2));
}
