/**
 * EXAMPLE-1
 */

function globalFunc() {
  function innerFunc() {
    function mostInnerFunc() {
      console.log(a);
    }
    mostInnerFunc();
  }
  innerFunc();
}

const a = 10;
globalFunc();

/**
 * EXAMPLE-2
 */

// var a = 10;

// function foo() {
//   var b = 20;
//   console.log(a + b);
// }

// foo();
