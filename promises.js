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
  
  