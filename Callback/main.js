require('es6-promise').polyfill();
require('isomorphic-fetch');
const axios = require('axios')


/***

  CALLBACK DEFINITION
  GETTING DATA AFTER EXTERNAL API REQUEST

***/

const http = require('http');

function externalAPIRequest(cb) {
  let url = "http://api.openweathermap.org/data/2.5/weather?q=Bordeaux&units=metric&appid=3e0d6900003924f67b5e7d1fe93c2f37";
  http.get(url, function (result) {
    let rawData = '';
    result.on('data', (chunk) => { rawData += chunk; });
    result.on('end', () => {
      const parsedData = JSON.parse(rawData);
      cb("no error", parsedData);
    });
  });
  console.log("I got throught at first")
}

externalAPIRequest(function (err, madata) {
  console.log(err);
  console.log("my data is here: ", madata);
});


/**
 * FETCH
 */
const keyaccess = '$2a$10$J8dGveh.flQh9hEAGemquubaPn.YFvhIpXVMYr30mjQpkoGmpCwee'



const url = 'https://www.potterapi.com/v1'
// fetch(`${url}/sortingHat`)
//   .then(response => response.json())
//   .then(data => console.log("fetch", data))

// fetch(`http://potterapi.com/v1/spell/new`, 
// {
//   method: "POST",
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ name: "Abracadabra" })
// })
//   .then(response => response.json())
//   .then(data => console.log("fetch post", data.json.name))



// axios.get(`${url}/sortingHat`)
//   .then(response => console.log("axios", response.data))

// axios.post(`https://postman-echo.com/post`, 
//   { name: "John Doe" })
//   .then(response => console.log("axios post", response.data.json.name))