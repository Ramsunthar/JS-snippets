let obj = {
  x: "",
  y: {
    z: "",
  },
};

obj.x = "alpha";
obj.y.z = 5;

Object.freeze(obj);

console.log(obj);

obj.x = "beta";
obj.y.z = "444";

console.log(obj);

/*------------------------------*/

let obj = { x: "" };
obj.x = "alpha";

// Object.freeze(obj);

console.log(obj);

obj.x = "beta";
console.log(obj);

/*------------------------------*/

let obj = {
  x: "",
  y: {
    z: 5,
  },
  w: "",
};

obj.x = "alpha";
obj.w = "gamma";

Object.freeze(obj);
console.log(obj);

obj.x = "beta";
obj.y.z = "444";
obj.w = "prod";

console.log(obj);
