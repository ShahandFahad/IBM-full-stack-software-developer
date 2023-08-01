let myPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("Promise resolved");
    }, 6000);
})

console.log("Before calling the promise");

myPromise.then((successMessage) => {
    console.log("From Callbak  " + successMessage);
});


console.log("After calling the promise");


let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 6000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 3000);
});

firstPromise.then(message => {
    console.log("From Callbak First promise " + message);

    secondPromise.then(message => {
        console.log("From Callbak Second promise " + message);
    });
});

