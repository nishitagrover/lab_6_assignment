/****************** Nishita Grover ******************/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element
    - check the value of the modelName variable, and use that to calculate the new total cost
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let cost = modelName === "XYZ" ? duration * 100 : duration * 213; 
    costLabel.innerHTML = cost.toFixed(2);
}

/****************** model button logic ******************/

/* 
- Create a variable to represent the "Switch Model" pseudo-button
- Define a function called changeModel() which toggles the modelName and updates the UI
*/

let modelButton = document.getElementById("model-button"); 

function changeModel() {
    let modelText = document.getElementById("model-text"); 
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate(); 
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/

/* 
- Create a variable to represent the "Change Duration" pseudo-button
- Define a function called changeDuration() to update the duration and recalculate the cost
*/

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter the number of days you want to book:");
    newDuration = parseInt(newDuration);

    if (!isNaN(newDuration) && newDuration >= 0) {
        duration = newDuration;
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid non-negative number.");
    }
}

durationButton.addEventListener("click", changeDuration);
