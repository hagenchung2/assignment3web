/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected,
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayT = 0;
let dRate = 35;

let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");

let full = document.getElementById("full");
let half = document.getElementById("half");

let clearDay = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, 
// and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once.
// hint: .classList.contains() might be helpful here!


function Fmon() {
    if (!mon.classList.contains("clicked")) {
        mon.classList.add("clicked");
        dayT = dayT + 1;
        calc();
    }
}
function Ftue() {
    if (!tue.classList.contains("clicked")) {
        tue.classList.add("clicked");
        dayT = dayT + 1;
        calc();
    }
}
function Fwed() {
    if (!wed.classList.contains("clicked")) {
        wed.classList.add("clicked");
        dayT = dayT + 1;
        calc();
    }
}
function Fthu() {
    if (!thu.classList.contains("clicked")) {
        thu.classList.add("clicked");
        dayT = dayT + 1;
        calc();
    }
}
function Ffri() {
    if (!fri.classList.contains("clicked")) {
        fri.classList.add("clicked");
        dayT = dayT + 1;
        calc();
    }
}
mon.addEventListener("click", Fmon);
tue.addEventListener("click", Ftue);
wed.addEventListener("click", Fwed);
thu.addEventListener("click", Fthu);
fri.addEventListener("click", Ffri);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days,
// any other relevant variables are reset, and the calculated cost is set to 0.

function Fclear() {
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thu.classList.remove("clicked");
    fri.classList.remove("clicked");
    dayT = 0;
    calc();
}
clearDay.addEventListener("click", Fclear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the 
//"clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function Fhalf() {
    if (full.classList.contains("clicked")) {
        half.classList.add("clicked");
        full.classList.remove("clicked");
        dRate = 20;
        calc();
    }
}
half.addEventListener("click", Fhalf);

// when the full-day button is clicked, the daily rate is set back to $35, 
// the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function Ffull() {
    if (half.classList.contains("clicked")) {
        full.classList.add("clicked");
        half.classList.remove("clicked");
        dRate = 35;
        calc();
    }
}
full.addEventListener("click", Ffull);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calc() {
    let calcCost = document.getElementById("calculated-cost");
    calcCost.innerHTML = dayT * dRate;
}

