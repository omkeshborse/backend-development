/* 
    promises form mary
*/

/* 

const maryPromise = new Promise(call_back_function(resolve ,reject){
    // nature of function  is normal function . 
    // resolve-reject are actions they are  also function
});

                        ⇑
                    make a object  

    two result --> resolve and reject (actions)--> (function) .

*/

// const maryPromise = new Promise((resolve, reject) => {
//   let parentDecision = true;
//   if (parentDecision) {
//     resolve({ msg: "Yayy , ab shadi ki tayyari karo ...", parentDecision });
//   } else {
//     reject({ msg: "Papa ne IAS dhoond lia hai! ,Sorry ...", parentDecision });
//   }
// });

/*  on the basis of  promise decision peter react/actions to do action
if maryPromise is result positive peter take action using then() block
if maryPromise is result is negative peter take action using catch() block */

// maryPromise
//   .then(({ msg, parentDecision }) => {
//     // positve scenario
//     console.log("mary message:", msg);
//     console.log("Parent Decision was:", parentDecision);
//     console.log("Let's book the wedding venue");
//   })
//   .catch(({ msg, parentDecision }) => {
//     // negative scenario
//     console.log("mary message:", msg);
//     console.log("Parent Decision was:", parentDecision);
//     console.log("Tinder kha ho yarr !");
//   })
//   .finally(() => {
//     console.log("chalo life mein clearity mili");
//   });

/* note that resolve and reject function only take one parameter 
   in any condition need to pass more than one element in resolve and reject function
   then one way is to pass in object and after destructuring in then & catch block .

   That's a common and recommended approach when you need to pass multiple values from 
   a Promise's resolve or reject functions. By wrapping the values in an object, you 
   can easily access them through destructuring in the then and catch blocks, making 
   your code more readable and maintainable. This pattern also ensures consistency in 
   handling resolved and rejected promises
*/

/* applications : 
    how and why we use Promise ? 
  1. read form database 
  

    app   ⇋  database
          n/w call(1. time (deltaT) 2.process  )  => 1 . data or 2. failure
  2. process the data if data recevies form Promise then i process the data
    else if data is not retrive i catch logic to handle error


    Why Use Promises?
  When interacting with a database in JavaScript, especially in web applications, the 
  operation is asynchronous. This means that while the application is waiting for data 
  from the database, it can continue to execute other tasks without being blocked. 
  Promises provide a clean way to handle asynchronous operations and manage their 
  outcomes, whether successful or not.

  How to Use Promises?
  Initiating the Database Request: When you need to read data from the database, you 
  initiate the request. This request involves a network call to the database, which 
  takes time (deltaT) to complete.

  Handling the Outcome with a Promise: You create a promise that represents the eventual 
  completion (or failure) of the database operation. This promise is returned 
  immediately to the calling code, allowing it to continue executing.

  Processing the Data: Once the data is retrieved successfully from the database 
  (resolved promise), you process it further in your application logic. This could 
  involve manipulating the data, displaying it to the user, or performing additional 
  computations.

  Error Handling: If the database operation fails (rejected promise), you catch the 
  error using the catch method of the promise. This allows you to gracefully handle 
  errors, such as displaying an error message to the user or retrying the operation.
*/

/* 
  in simple Any asychromous processing   use promise 

*/

/*  in javascript file 
    multiple problems  p1(async)(5-10sec) , p2 (async)(6-8sec), p3 (async)(16-20sec) 
    and final step S to perform when all 3 step are completed 


   promise1 -->data from data base 
   promise2--> data from 3rd party api
   promise3-->data form hard disk  
   when all data collected then i have to process on this data . 
   then can be doen using all function of promises. 


*/

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Simulating an asynchronous operation
//     resolve("Result of p1");
//   }, 5000); // Simulating 5-10 seconds delay
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Simulating an asynchronous operation
//     resolve("Result of p2");
//   }, 6000); // Simulating 6-8 seconds delay
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Simulating an asynchronous operation
//     resolve("Result of p3");
//   }, 16000); // Simulating 16-20 seconds delay
// });

// Promise.all([p1, p2, p3])
//   .then(([result1, result2, result3]) => {
//     // Final step after all promises are resolved
//     console.log("All promises resolved successfully");
//     console.log("Result of p1:", result1);
//     console.log("Result of p2:", result2);
//     console.log("Result of p3:", result3);
//     // Perform final step S here
//   })
//   .catch((error) => {
//     console.error("At least one promise was rejected:", error);
//   });

/* three friend plane to in GOA trip : 
  friend1 : promises i will go to Goa
  friend2 : promises i will go to Goa
  friend3 : promises i will go to Goa

  if all friend fill promises fullfilied then only goa ticket is book and final goa 
  trip if any one cancelled then all plan of trip is cancelled.
  so i have to do it in world of programming i do this with 
  all function 

*/

// const f1Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random > 0.5) {
//       resolve("friend1: Hey i am in for Goa");
//     } else {
//       reject("friend1: Sorry mere pet mei dard ho raha hai!");
//     }
//   }, 3000);
// });

// const f2Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random > 0.5) {
//       resolve("friend2: Hey i am in for Goa");
//     } else {
//       reject("friend2: Sorry meri billi bemmar hai !");
//     }
//   }, 1000);
// });

// const f3Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random > 0.5) {
//       resolve("friend3: Hey i am in for Goa");
//     } else {
//       reject("friend3: Sorry mujhe pw skills ke live sessions karne hai!");
//     }
//   }, 500);
// });

// Promise.all([f1Promise, f2Promise, f3Promise])
//   .then((msg) => {
//     console.log(msg);
//     console.log("Yay we are going for Goa");
//   })
//   .catch((msg) => {
//     console.log(msg);
//     console.log("Yaar band karo Goa ka plan banana!");
//   });

/* 
  i have verify user  data is in 3 differnt places
  1. adhar card verification (p1 promise )
  2. bank api (p2 promise )
  3. from data base (p3 promise )
  any one of above tells user is verify ,then give result/next-process ,
  if not verify catch details  

  form all 3 promise any of one promise get resolve then move to next-step , this is 
  doen by any method in of promise 
*/
/* 
  p1 , p2 ,p3 (any one full-filed) --> next-step 

*/

/* 
  real life example : 
  peter make 3 girl-friend gf1 ,gf2 ,gf3 for valentine's day  and take promise from 
  all girl-friend of peter promises to for going on dinner at valentine's day . 
  if one of 3 accept then happy day for peter then peter go for valentine's day dinner
  , in any case all 3 gf rejected promises it catch bad day for peter and join 
  bhajarang dal



  Peter has made plans with three girlfriends for Valentine's Day dinner. To handle 
  these plans, he uses JavaScript promises. Each promise represents the response from 
  one girlfriend regarding the dinner invitation.

1. gf1Promise: Represents the response from Girlfriend 1.
2. gf2Promise: Represents the response from Girlfriend 2.
3. gf3Promise: Represents the response from Girlfriend 3.
Peter uses the Promise.any() method to handle these promises. This method takes an 
array of promises and returns a new promise. This new promise is fulfilled when any of 
the promises in the array are fulfilled, or rejected if all of the promises are 
rejected.

Each promise is set to resolve or reject after a simulated delay using setTimeout(). 
This delay represents the time it takes for each girlfriend to respond to Peter's 
invitation.

If at least one girlfriend accepts the invitation (Promise.any() resolves), Peter is 
notified with a message indicating a happy Valentine's Day, and the response from the 
accepting girlfriend is logged. Peter then proceeds to go for Valentine's Day dinner.

If all girlfriends reject the invitation (Promise.any() rejects), Peter is notified 
with a message indicating a bad day, and the reason for rejection is logged. In this 
scenario, Peter decides to join the Bhajarang Dal instead.

This example demonstrates how promises in JavaScript can be used to handle 
asynchronous operations, such as coordinating responses from multiple parties, and how 
Promise.any() can be particularly useful when only one successful response is needed 
among several possibilities.
*/

const gf1Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("GF1 : Hey i'will come for dinner");
    } else {
      reject("GF1 : Phone is unreachable!");
    }
  }, 3000);
});
const gf2Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("GF2 : Hey i'will come for dinner");
    } else {
      reject("GF1 : i am on diet !");
    }
  }, 2000);
});
const gf3Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("GF3 : Hey i'will come for dinner");
    } else {
      reject("GF3 : my friends are comming!");
    }
  }, 5000);
});

Promise.any([gf1Promise, gf2Promise, gf3Promise])
  .then((msg) => {
    console.log(msg);
    console.log("My valentine's day is sorted");
  })
  .catch((msg) => {
    console.log(msg);
    console.log("How to be part of bajrandal? ");
  });
