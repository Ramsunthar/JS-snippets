//Normal function
function F1(x, y) {
  return x * y;
}

//Arrow Function
const F2 = (x, y) => {
  return x * y;
};

//If the body is only one line
const F3 = (x, y) => x * y;

//If the function has only one parameter - no parenthesis needed
const F4 = x => x * x;

console.log(F1(2,5));
console.log(F2(2,5));
console.log(F3(2,5));
console.log(F4(2,5));



