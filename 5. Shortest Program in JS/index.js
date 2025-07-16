
/**
 * Shortest program in js is no code, hehehe its funny but true.
 */



console.log(this === window);
// this will print true

function f() {
  console.log(window);
}
f(); // logs window
