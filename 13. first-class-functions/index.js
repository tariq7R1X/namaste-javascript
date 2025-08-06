// ANNONYMOUS FUNCTIONS
// ====================

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(2, 3));


// Passing Function as Argument (CALLBACK FUNCTION)
// ================================================

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// const result = calculate(5, 3, function(x, y) {
//   return x * y;
// });
// console.log(result); 



// Returning a Function from a Function
// ====================================

// function greetGenerator(){
//     return function(name){
//         console.log("Hello, ", name);
//     }
// }
// const greeter = greetGenerator();
// greeter("Tarique");



// EVENT LISTENERS
// ===============

document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked!");
});

