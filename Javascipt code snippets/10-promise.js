// const http = require('http');

// function fetchWebPage(url) {

//     return new Promise((resolve, reject) => {
//         http.get(url,response => {
//             let responseData;
//             response.on('data', data => responseData = responseData + data);
//             response.on('end', ()=> resolve(responseData));
//             response.on('error', reject);
//         });
//     });
// }

// fetchWebPage ('http://www.unity.com')
// .then(data=> console.log(data.length))
// .catch(error => console.log(error))
// .finally(()=> console.log("finished"))

// async function readWebPage() {
//     let res=''
//     res = await fetchWebPage('http://apple.com/');
//     console.log(res.length)
// }

// readWebPage();

/*----------------------------------------------------------------------*/

//to create a promise
// const demoPromise = new Promise((resolve, reject) => {
//   const condition = true;
//   if (condition) {
//     setTimeout(function () {
//       resolve("Promise is resolved!"); // fulfilled
//     }, 3000);
//   } else {
//     reject("Promise is rejected!");
//   }
// });

//to use the promise
// demoPromise
//   .then((successMsg) => {console.log(successMsg)})//for resolve
//   .catch((errorMsg) => {console.log(errorMsg)})//for reject

/*----------------------------------------------------------------------*/

// const demoFunction = function () {
//   demoPromise
//     .then((successMsg) => {
//       console.log("Success:" + successMsg);
//     })
//     .catch((errorMsg) => {
//       console.log("Error:" + errorMsg);
//     });
// };

// demoPromise();//to call it

/*----------------------------------------------------------------------*/


//  function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise;

//     console.log(result);
//   }

//   f();

/*----------------------------------------------------------------------*/


// async function testAsync() {
//   var data = await demoPromise;
//   console.log(data);
// }
// testAsync();
