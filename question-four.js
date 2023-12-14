//Display a simple message outside a function that says, This is a text outside a function block
const word = "This is a text outside a function block";

function displayWords() {
    return "THis is a text inside a function block";
}

console.log(displayWords());
console.log(word);