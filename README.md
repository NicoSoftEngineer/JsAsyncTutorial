
# Async functions in JavaScript

## Callbacks
This is how callbacks work
```javascript
//this is the callback funtion
//this function is called when the request is finished
function myDisplayer(some) {
    console.log(some)
  }
  
  //the initial function, you call this to retrieve some data.
  // When the request is completed it calls the callback from the function parameter
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  //we call the function to retrieve some data(calculate) 
  //and pass in the callback funtion as a parameter
  myCalculator(5, 5, myDisplayer);
  ```
## Promises
How to work with promises with build in methods.
```javascript
// Function that return a promise
function fetchData(url) {
    //return a promise that is either good(resolve) or bad(reject)
    //we can then use these somewhere else in the code
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
            if (req.status == 200) {
              console.log(req.status)
              resolve(req);
            } else {
              reject(req);
            }
          };
        req.send()
    });
  }
  

  fetchData('https://www.w3schools.com/js/mycar.mhtml')
  //after returning valid data .then() function is used 
  //the parameter to this function is a function or a lambda expression
  //this syntax uses lambda expression(arrow function)
    .then(data => {
      console.log(data);
    })
    //if there was an error in the fetchData function
    //.catch() function is called
    //this syntax uses regular functions
    .catch(function(error) {
      console.error(error);
    });

```
## Async and Await
Here we look at how to work in a different way with promises.
```javascript
// Function that return a promise
function fetchData(url) {
  //return a promise that is either good(resolve) or bad(reject)
  //we can then use these somewhere else in the code
  return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
          if (req.status == 200) {
            console.log(req.status)
            resolve(req);
          } else {
            reject(req);
          }
        };
      req.send()
  });
}
  
  //async function for working with promises or other async functions
  async function getData() {
    //normal try catch
    try {
      //awaits an outpur from fetchData which is a promise
      //this is basically a different way to work with promises without
      //using .then()
      //this syntax works almost the same as in C#
      const data = await fetchData('https://www.w3schools.com/js/mycar.html');
      console.log(data); // Output: 200
    } catch (error) {
      console.error(error); // Output: error status
    }
  }
  
  getData();
```

