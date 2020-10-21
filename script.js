console.log("Start");


function prepareFood(foodCallback) {
    setTimeout(() => {
        console.log("Food is Preparing...");
        foodCallback("Food is Ready")
    },2000)
}

function prepareFrenchToast(frenchToastCallback) {
    setTimeout(() => {
        console.log("French Toast is preparing");
        frenchToastCallback("French Toast is Ready")
    },3000)
}

function prepareCoffe(CoffePrepareCallback) {
    setTimeout(() => {
        console.log("Preparing Coffe");
        CoffeCallback("Coffe is Ready")
    },4000)
}

function myCallback(value) {
    console.log("Food Value = " + value);
    prepareFrenchToast(frenchToastCallback)
}

function frenchToastCallback(value) {
    console.log("French Toast Value = " + value);
    prepareCoffe(CoffeCallback);
}

function CoffeCallback(value) {
    console.log("Coffe value = " + value);
}

prepareFood(myCallback);


console.log("End");