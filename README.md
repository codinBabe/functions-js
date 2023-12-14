# QUESTION
Read and summarize the following Articles.
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_functions.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
https://www.javascripthelp.org/learn/basics/control-flow-statements/
https://javascript.info/function-basics
Add the summary into a seperate file, called README.md
make sure you use a seperate github repositor to host this.
Have a file for each questions. eg. display.js.

# SUMMARY

### JS_ARRAY_METHODS
Javascript array is a data structure that can hold more than one value. Here is a summary of the key points:

- Array Length:

The length property returns the size of an array.
- Array toString():

The toString() method converts an array to a string of comma-separated values.
- Array pop():

The pop() method removes the last element from an array.
- Array push():

The push() method adds a new element to the end of an array.
- Array shift():

The shift() method removes the first element from an array and shifts other elements to a lower index.
- Array unshift():

The unshift() method adds a new element to the beginning of an array and shifts older elements.
- Array join():

The join() method joins all array elements into a string with an optional separator.
- Array delete():

The delete operator can be used to delete array elements, but it leaves undefined holes.
- Array concat():

The concat() method creates a new array by merging existing arrays.
- Array flat():

The flat() method reduces array dimensionality by concatenating sub-array elements to a specified depth.
- Array splice():

The splice() method adds or removes items from an array at a specified position.
- Array slice():

The slice() method creates a new array by extracting a portion of an existing array.
- Automatic toString():

JavaScript automatically converts an array to a comma-separated string when a primitive value is expected.
- Finding Max and Min Values:

The tutorial mentions that there are no built-in functions for finding the highest or lowest value in a JavaScript array, and this will be covered in the next chapter.

### JS-FUNCTION
- Function Definition:

A JavaScript function is a block of code designed to perform a specific task.
It is executed when invoked or called by an event, JavaScript code, or automatically (self-invoked).
- Function Syntax:

Defined using the function keyword, followed by a name and parentheses.
Function names follow variable naming rules.
*Parameters* (inputs) are listed inside the parentheses, and the code to be executed is enclosed in curly brackets.
- Function Invocation:

Functions are executed when called by an event, JavaScript code, or automatically.
The content hints at learning more about function invocation later in the tutorial.
- Function Return:

When a *return* statement is encountered, the function stops executing.
The return value is sent back to the caller, allowing computation and reuse of results.
- Benefits of Functions:

Functions enable code reuse and writing modular, reusable code.
The same code can be used with different arguments to produce different results.
- The () Operator:

Invokes (calls) the function, passing arguments if needed.
Examples demonstrate correct and incorrect usage.
Functions Used as Variable Values:

Functions can be used directly as variable values in expressions and assignments.
- Local Variables:

Variables declared within a function are local to that function.
They can only be accessed within the function, allowing the use of the same variable names in different functions.
Local variables are created when the function starts and are deleted when the function completes.

### MORE FUNCTION
The third article covers detailed explanation on various aspects of functions in JavaScript:

- Definition and Usage:

A function is a "subprogram" that performs a specific task.
It consists of a sequence of statements, and values can be passed to it as parameters.
JavaScript treats functions as first-class objects, allowing them to be passed around, returned from other functions, and assigned to variables.
Functions can have properties and methods like any other object but stand out because they can be called.
Return Value:

By default, if a function's execution doesn't end with a return statement, or if return doesn't have an expression, the return value is undefined.
The return statement allows you to specify the value that the function will return.
- Passing Arguments:

Parameters (used in the function definition) and arguments (actual values passed during the function call) are terms often used interchangeably.
Arguments are always passed by value, and changes to parameters inside the function may not affect the original outside the function.
- The this Keyword:

this refers to the object that the function is accessed on and does not point to the currently executing function.
- Defining Functions:

JavaScript has four main types of functions: Regular, Generator, Async, and Async Generator.
Functions can be defined using declaration, expression, or constructor syntax.
Arrow functions and methods provide additional options.
Classes, while not functions, inherit from Function.prototype.
- Function Scope and Closure:

Functions defined by declaration are hoisted and can be accessed both inside and outside their scope.
Functions created using the Function() constructor do not inherit local variables and are generally slower.
- Function Parameters:

Parameters can have default values, and the rest parameter allows handling an indefinite number of arguments.
Destructuring enables unpacking elements from arrays or properties from objects.
- The arguments Object:

arguments is an array-like object containing arguments passed to a function.
arguments.callee refers to the currently executing function.
arguments.length provides the number of arguments passed.
- Getter and Setter Functions:

Getter and setter functions allow defining accessor properties on objects.
- Block-level Functions:

In strict mode, functions inside blocks are scoped to that block.
It is recommended to avoid defining functions conditionally in non-strict mode.
- Examples:

The explanation includes examples such as formatting numbers, checking for the existence of a function, and more.

### CONTROL FLOW
- Definition:

Control flow statements are crucial in programming to determine the order of statement execution based on conditions.
JavaScript has three primary control flow statements: if/else statements, switch statements, and loops.
- If/Else Statements:

Used to execute different blocks of code based on a condition's truthiness.
Example:
```javascript
const age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not yet an adult");
}
```
- Switch Statements:

Executes code based on the value of a variable or expression.
Example:
```javascript
const dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's another day of the week");
    break;
}
```
- Loops:

Used to repeat a block of code based on a specified condition.
Two main types: for loops and while loops.
For Loop Example:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```
While Loop Example:
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

- While and Do...While Loops:

While loop executes a statement as long as the condition is true.
Do...while loop executes the statement first and continues while the condition remains true.
Example of guessing a secret number using a while loop:

```javascript
let secretNumber = Math.floor(Math.random() * 100) + 1; // This generates a random number between 1 and 100
let guess = null;

while (guess !== secretNumber) {
  guess = prompt("Guess the secret number between 1 and 100!"); // This prompts the user to enter a number
  guess = Number(guess); // Convert the string input to a number

  if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  }
}

alert("Congratulations! You guessed the secret number.");
```
Real-life Examples:
```javascript
let isSubscribed = false;

do {
  // code to display one free article to the user
  showFreeArticle();

  // Ask if the user wants to subscribe after reading
  isSubscribed = confirm("Did you enjoy your free article? Subscribe for more!");
} while (!isSubscribed); // If not subscribed, the loop offers another free article

alert("Thank you for subscribing!");
```
Demonstrates practical scenarios using do...while loops, such as prompting users to subscribe after reading a free article.

### Functions in JavaScript

- Definition

Functions are fundamental in programming, allowing the reuse of code and avoiding repetition.
Examples of built-in functions include alert(), prompt(), and confirm().
- Function Declaration:

Functions are declared using the function keyword, followed by a name, parameters, and the function body in curly braces.
Example:
```javascript

function showMessage() {
  alert('Hello everyone!');
}
```
- Local Variables:

Variables declared inside a function are local and only visible within that function.
Example:
```javascript

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}
```
- Outer Variables:

Functions can access outer variables, and modifications affect the outer variable.
Example:
```javascript

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
```
- Global Variables:

Variables declared outside functions are global and accessible from any function.
It's recommended to minimize the use of global variables.
- Parameters:

Functions can receive data through parameters.
Example:
```javascript

function showMessage(from, text) {
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!');
```
- Default Values:

Default values for parameters can be set using the = operator.
Example:
```javascript

function showMessage(from, text = 'no text given') {
  alert(from + ': ' + text);
}

showMessage('Ann'); // Ann: no text given
```
- Evaluation of Default Parameters:

Default parameters are evaluated each time the function is called without the respective argument.
- Returning a Value:

Functions can return a value using the return keyword.
Example:
```javascript

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```
- Naming a Function:
- Function names are usually verbs and should be descriptive.
- Common prefixes include "get…", "calc…", "create…", "check…", etc.

- Ultrashort Function Names:
- Some functions, like those in libraries, may have ultrashort names for brevity.

- Functions == Comments:
- Functions should be short and focused on a single action, improving readability.
- A function's existence can serve as documentation.

- One Function == One Action:
- A function should do exactly what its name suggests.
- Avoid combining multiple independent actions in one function.