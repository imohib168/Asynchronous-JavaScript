console.log("Start");


function prepareFood(foodCallback) {
    setTimeout(() => {
        console.log("Food is Preparing...");
        foodCallback("Food is Ready")
    }, 2000)
}

function prepareFrenchToast(frenchToastCallback) {
    setTimeout(() => {
        console.log("French Toast is preparing");
        frenchToastCallback("French Toast is Ready")
    }, 3000)
}

function prepareCoffe(CoffePrepareCallback) {
    setTimeout(() => {
        console.log("Preparing Coffe");
        CoffePrepareCallback("Coffe is Ready")
    }, 4000)
}


prepareFood(function (value) {
    console.log("Food Value = " + value);
    prepareFrenchToast(function (value) {
        console.log("French Toast Value = " + value);
        prepareCoffe(function (value) {
            console.log("Coffe value = " + value);
        });
    })
});


console.log("End");