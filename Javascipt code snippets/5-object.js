let num = Math.SQRT2;
const demoObject = {
    key: "value",
    num,
};
console.log(demoObject.num);

/*---------------------------------------------------------*/

let status = "service";

const demoObject = {
  key: "value",
  [status]: "approved", //dynamic properties
};


console.log(demoObject);

