
// practical use
console.log("Get ready...");
setTimeout(() => {
    console.log("Go!");
}, 3000); // Waits 3 seconds before running

// when  process large data and want it done in the end
function processLargeData() {
    console.log("Processing...");
}
setTimeout(processLargeData, 0); // Runs after current stack is cleared

// timer
function countdown(seconds) {
    let current = seconds;
    const timer = setTimeout(function tick() {
        if (current > 0) {
            console.log(current--);
            setTimeout(tick, 1000); // Call again after 1 second
        } else {
            console.log("Time's up!");
        }
    }, 1000);
 }
 
 countdown(5);
 