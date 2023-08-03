//This method will be provided as a parameter
function firstCallBackMethod() {
    console.log("Inside the first call back method")
}

console.log("Going to call setTimeOut with a delay of 5 seconds")
//Call the function firstCallBackMethod after a delay using setTimeOut
setTimeout(firstCallBackMethod,5000);