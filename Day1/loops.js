// for (var i = 0; i < 10; i++) {
//   console.log(i, "hello peter");
// }

/* 
    for(arguments ){
        body 
    }
    for(initialization ;  condition(boolean expression) ; increment/decrement(operations) ){

    }

*/
/* infinite loop */
// for(var i = 0 ; i<10 ; ){
//     console.log("peter");
// }

//  for(var i = 0 ;  ; i++){
//     console.log("hello peter" , i);
//  }

/* while loop */

let a = 0;
// while (a < 10) {
//   console.log("hello peter", a);
//   a++;
// }

/* 
    while(boolean expression){
        body of loop ; 
        increment/decrement(operations)
    }
*/
/* infinite loop */

// while (a < 10) {
//   console.log("hello peter", a);
//   //   a++;
// }

/* when use for and while  */
/* 
    when you know how many times it run then use for loop 
    
    when execution is base on condition  then use while loop 
    

    it is only suggestions both loop replace each other in any situations 
    */

/* break and  continue  */

/* continue statement is use skip next statement in iteration  */

/* loop over 1 to  50  print even and skip odd number   */

/* for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue; // any thing after this not executed
  }
  console.log(i);
} */

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (j % 2 !== 0) {
      continue; // this only skip for inner loop not a outer loop
    }
    console.log(j);
  }
  console.log("hello ", i);
}
/* 
   The continue statement in JavaScript only affects the loop in which it is directly 
   contained. In this case, it's within the inner loop, so it only affects that loop. 
   The outer loop will continue its iterations as usual.  
*/

/* break  statement */

/* 
In JavaScript, the break statement is used to exit a loop prematurely. When break is 
encountered within a loop (such as a for loop or a while loop), it immediately 
terminates the loop's execution and resumes execution at the next statement after the 
loop.

*/

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log("hey " + i + " let's date !");
}

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if(i==5){
        break ; // it's impact only on inside loop
    }
    console.log(j);
  }
}

/* 
The break statement in JavaScript, when encountered within a loop, immediately 
terminates the execution of that loop and resumes execution at the next statement after 
the loop. In the provided code, the break statement is situated within the inner loop.
Therefore, it exclusively terminates the inner loop's execution without affecting the 
outer loop. As a result, the outer loop continues its iterations as usual."
*/