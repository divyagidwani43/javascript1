console.log("Start");


setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000); 
//is here but will still execute in the end when all other functions are done after 2000ms



const orderCake = new Promise((resolve, reject) => {
    resolve();
});
orderCake
    .then(result => {
        console.log(result);  // "Cake ordered"
        return "Cake baked";
    })
    .then(result => {
        console.log(result);  // "Cake baked"
        return "Cake delivered";
    })
    .then(result => {
        console.log(result);  // "Cake delivered"
    })
    .catch(error => {
        console.log(error);  // If something goes wrong, it gets caught here
    });



    
console.log("End");

