var weightInput = document.querySelector("input");
var weightSubmit = document.querySelector("button");
var h2 = document.querySelector("h2");
var result = document.querySelector(".result");
var planet = document.querySelector("select");
var weight = 0;

weightSubmit.addEventListener("click", function (e){
    e.preventDefault();
    var planetChoice = planet.value;
    var weight = weightInput.value;
    var newWeight = spaceWeights("earth", weight, planetChoice);
    planetChoice = planetChoice.charAt(0).toUpperCase() + planetChoice.slice(1);
    console.log(weight);
    h2.textContent = "You would weigh " + newWeight + " pounds on " + planetChoice;
});

// weightInput.addEventListener("keypress", function (e){
//     if (e.key === 'Enter'){
//         var newWeight = spaceWeights("Earth", weightInput.value, "Jupiter");
//         console.log(newWeight);
//     }  
// });




function spaceWeights(planetA, weight, planetB) {
  var planetGravs = {
    mercury:3.7,
    venus:8.87,
    earth:9.81,
    mars:3.711,
    jupiter:24.79,
    saturn:10.44,
    uranus:8.69,
    neptune:11.15,
    pluto: 0.62
  }
  var weight = (weight/planetGravs[planetA]) * planetGravs[planetB];
  return Number(weight.toFixed(2));
}
