// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

/**
 * var is function scope
 * So, there's only one shared i variable for all iterations
 * By the time setTimeout callbacks run, the loop has already completed
 * this will print 6 6 6 6 6 after one second
 */

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

/**
 * let has block scope
 * So, a new i is created for each itration of the loop.
 * Each setTimeout closure "remembers" the correct value of i at that time
 * this will print 1 2 3 4 5 after one second
 */

// ===========================
/**
 * But what if cool interviewer asked you to use only var??
 */

function z() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
}
z();
