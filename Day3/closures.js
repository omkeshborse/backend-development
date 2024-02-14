/* function hello() {
  let name = "peter";
  console.log(name);
}

hello();
console.log(name); //ReferenceError: name is not defined

*/

function outerFn() {
  let outerVar = "I am from the outer fn";
  function innerFn() {
    console.log(outerVar);
  }
  return innerFn;
}

let fn = outerFn();
fn(); 
// here  i am still able to the hold local variable of outer function
// this is called closure

/* 

In the provided code, `outerFn` is a function that returns another function (`innerFn`). `innerFn` is defined inside `outerFn`, creating a closure. Let's break down how closures work in this context:

1. **Defining `outerFn`:**
   - `outerFn` is declared with a local variable `outerVar` set to "I am from the 
   outer fn".
   - Inside `outerFn`, there's another function `innerFn` defined.
   - `innerFn` has access to `outerVar` due to closure, even though `outerVar` is not 
   a parameter of `innerFn`.

2. **Returning `innerFn`:**
   - `outerFn` returns the result of invoking `innerFn`, not `innerFn` itself. This 
   means that `innerFn` is executed immediately when `outerFn` is called, and its 
   return value is assigned to `fn`.

3. **Execution:**
   - When `outerFn` is called and executed, `innerFn` is also executed within it.
   - Since `innerFn` has access to the `outerVar` variable due to closure, it logs "I 
   am from the outer fn" to the console.

4. **Assigning to `fn`:**
   - The result of calling `outerFn` is assigned to the variable `fn`. In this case, 
   the result is the return value of `innerFn`.
   - `fn` now refers to the result of the immediate execution of `innerFn`, which 
   doesn't return anything explicitly (it logs to the console but returns `undefined`).
   
5. **Calling `fn`:**
   - When `fn` is invoked, it attempts to execute the result of `outerFn`, which is `innerFn`.
   - However, `innerFn` was already executed when `outerFn` was called, so calling `fn` doesn't have any effect. It just logs "I am from the outer fn" again to the 
   console.

In summary, the closure in this code allows `innerFn` to access the `outerVar` 
variable even after `outerFn` has finished executing. However, since `innerFn` is 
invoked immediately within `outerFn` and doesn't return anything, there isn't much 
benefit to storing its result in `fn` and calling it again.
*/

/* 
    when and why should i use closures ? 
    closures are use to deal with encapsulation(hiding of internal/important data )
*/

/* 
    example with real world analogy :
    shop to maintain count of number people/customer to achieve this we use closures
*/

function customerCounter() {
  let count = 0;
  return function () {
    //anonymous inner  functions
    count++;
    console.log("new customer count is", count);
  };
}

let counter = customerCounter();
counter();
counter();
counter();
counter();


/* 
Sure, let's break down the provided example with a real-world analogy:

**Real-world Analogy: Shop Customer Counter**

Imagine you're running a shop, and you want to keep track of the number of customers 
who enter the shop. To achieve this, you decide to use closures.

**Code Explanation:**

1. `customerCounter()` is a function that returns another function. This inner 
function forms a closure, allowing it to access the `count` variable declared in the 
outer function's scope.

2. Inside `customerCounter()`, there's a `count` variable initialized to 0. This 
variable serves as the counter for the number of customers.

3. The inner function returned by `customerCounter()` is an anonymous function that 
increments the `count` variable each time it's called and logs the updated count to 
the console.

4. `counter` is assigned the result of calling `customerCounter()`, which is the inner 
function. This means that `counter` now refers to the inner function and forms a 
closure with access to the `count` variable.

5. When `counter()` is called multiple times, each invocation increments the `count` 
variable and logs the updated count to the console.

**Analogous Scenario:**

- In this analogy, the shop represents the scope of the `customerCounter()` function, 
where the `count` variable is maintained.
- Each time a customer enters the shop (each time the inner function is invoked), the 
count of customers increases.
- The closure formed by the inner function allows it to retain access to the `count` 
variable across multiple invocations, simulating the behavior of a customer counter in 
a shop.

So, in summary, the closure in this example enables us to maintain a customer counter 
within the shop's scope, allowing us to keep track of the number of customers entering 
the shop over time.


*/