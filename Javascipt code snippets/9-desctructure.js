// var a, b;
// [a, b] = [5, 10];

// console.log(a);
// console.log(b);

/*-----------------------------------*/

// const PI = Math.PI
// const SQRT2 = Math.SQRT2;

// const {PI,SQRT2} = Math;

// console.log(PI)
/*-----------------------------------*/

// const Obj = {
//     value: 2.43,
//     color: 'red',
//     confirm: true,
//     count: '4',
//     round : 0
// }
// const {PI} = Math;

// const area= ({value}) => {
//     return value*value;
// }

// console.log(area(Obj));

// const area1 = ({value}, {round =3} ={}) => {
//     return (value*value).toFixed(round)
// }

// console.log(area1(Obj))
// console.log(area1(Obj, {round : 5}))

/*-----------------------------------*/

//Normal way
// var fs = require("fs");

// fs.writeFile("destructTest.txt", "Normal way\n", function (err) {
//   if (err) throw err;
//   console.log("File saved");
// });

// With destructuring
// const { writeFile } = require("fs");
// writeFile("destructTest.txt", "With destructuring\n", function (err) {
//   if (err) throw err;
//   console.log("File saved");
// });
/*-----------------------------------*/

// const [a,b,c,,d] = [10,20,30,40,50];

// console.log(a)
// console.log(d)
/*-----------------------------------*/

// const[a, ...otherValues] = [10,20,30,40,50];
// console.log(a)
// console.log(otherValues)

/*-----------------------------------*/

// const newArr = otherValues;
// console.log("new  array:"+newArr)

/*-----------------------------------*/

// const games = {
//   name: "Splinter Cell",
//   character: "Sam Fisher",
//   sequel: 6,
//   type: "Stealth",
// };

// let { type, ...gameDetails } = games;

// console.log(type);
// console.log(gameDetails);

/*-----------------------------------*/

