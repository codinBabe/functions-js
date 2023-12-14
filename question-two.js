//Build a simple loop, inside a function, that takes an array and prints the value of the array to the console
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function runLoop() {
    for (let i = 0; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    }
}
runLoop();