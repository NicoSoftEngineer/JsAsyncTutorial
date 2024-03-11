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