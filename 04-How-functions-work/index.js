/**
 *
 * JavaScript code is executed in two phases:
 * 1. Memory Creation Phase
 * 2. Code Execution Phase
 *
 * In the Memory Creation Phase, all variables are initialized to `undefined`,
 * and function declarations are stored with their definitions.
 *
 * A Global Execution Context is created.
 *
 * Then, during the Code Execution Phase:
 * - On line 1, `x` is initialized with the value `1`.
 * - On line 2, `firstFunction()` is invoked, and a new Execution Context is created and pushed to the Call Stack.
 *   - In its Memory Creation Phase, its variables are initialized to `undefined`.
 *   - In the Code Execution Phase, they are assigned their actual values.
 *   - After the function finishes executing, its Execution Context is removed from the Call Stack.
 *
 * The same process applies to `secondFunction()`.
 *
 * After that, on line 4, JavaScript looks for the value of `x` in the local memory,
 * finds `1`, and prints it to the console.
 *
 * When the entire code finishes executing, the Global Execution Context is also removed,
 * and the Call Stack becomes empty.
 *
 */

var x = 1;
firstFunction();
secondFunction();
console.log(x);

function firstFunction() {
  var x = 10;
  console.log(x);
}

function secondFunction() {
  var x = 100;
  console.log(x);
}
