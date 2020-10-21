console.log("Start");

function prepareFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data !== 2) {
                console.log("Food is Preparing...");
                resolve("Food is Ready");
            } else {
                reject("Value not acceptable")
            }

        }, 10);
    });

    return promise;
}

function prepareFrenchToast() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("French Toast is preparing");
            resolve("French Toast is Ready")
        }, 20)
    })

    return promise;
}

function prepareCoffe() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Preparing Coffe");
            resolve("Coffe is Ready")
        }, 30)
    })

    return promise;
}


async function startProcess() {

    try {
        let foodValue = await prepareFood(2);
        console.log(`Food Value: ${foodValue}`);

        let FrenchToastValue = await prepareFrenchToast()
        console.log(`French Toast Value: ${FrenchToastValue}`);

        let coffeValue = await prepareCoffe();
        console.log(`Coffe Value: ${coffeValue}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

startProcess()

// let prom = prepareFood()    
// console.log(prom);


// prom.then((value) => {
//     console.log(`Food Value: ${value}`);
//     return prepareFrenchToast();
// })
//     .then((frenchToastValue) => {
//         console.log(`French Toast Value: ${frenchToastValue}`);
//         return prepareCoffe();
//     })
//     .then((CoffeValue) => {
//         console.log(`Coffe Value: ${CoffeValue}`);
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })

// prepareFood(function (value) {
//     console.log("Food Value = " + value);
//     prepareFrenchToast(function (value) {
//         console.log("French Toast Value = " + value);
//         prepareCoffe(function (value) {
//             console.log("Coffe value = " + value);
//         });
//     })
// });


console.log("End");