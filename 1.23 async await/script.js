async function fetchData() {
    let isSuccess = true;
    
    if (isSuccess) {
        return "Data fetched successfully!";  // Resolves the promise
    } else {
        throw "Error occurred while fetching data.";  // Rejects the promise
    }
}

async function main() {
    try {
        let result = await fetchData();  // Waits for the promise to resolve
        console.log(result);  // "Data fetched successfully!"
    } catch (error) {
        console.log(error);  // Catches the error if promise is rejected
    }
}

main();

/*
async function returns a Promise, which is resolved when the function returns a value or rejected if an error occurs.
await pauses the execution of the function until the Promise is resolved or rejected. This gives a more synchronous look 
and feel to asynchronous code.
*/


async function fetchData() {
    let isSuccess = true;
    
    if (isSuccess) {
        return "Data fetched successfully!";
    } else {
        throw "Error occurred while fetching data.";
    }
}

async function main() {
    try {
        // will only go here if we get return from fetchdata not throw
        let result = await fetchData();
        console.log(result);  // Success
        let nextStep = "Next step";
        console.log(nextStep);  // Chained success
    } catch (error) {
        console.log(error);  // Error handling
    }
}

main();
