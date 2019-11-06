var weightInput = document.querySelector("input");
var weightSubmit = document.querySelector("button");
var h2 = document.querySelector("h2");
var result = document.querySelector(".result");
var weight = 0;

weightSubmit.addEventListener("click", function (e){
    e.preventDefault();
    var newWeight = spaceWeights("Earth", weightInput.value, "Jupiter");
    console.log(newWeight);
    h2.textContent = "You weigh " + newWeight + " pounds on Jupiter";
    toggleHide(h2);
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
    Neptune:11.15
  }
  var weight = (weight/planetGravs[planetA]) * planetGravs[planetB];
  return Number(weight.toFixed(2));
}

function toggleHide(el){
    el.classList.remove("hide");
}