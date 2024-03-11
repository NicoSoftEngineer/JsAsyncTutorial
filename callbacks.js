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