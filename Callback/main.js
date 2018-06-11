/***

  CALLBACK FOR DUMMIES
  HELLO WORLD

***/

function print(message,cb)
{
cb(message);
}

sort("Hello World",function(message){
  console.log(message);
})

/***

  CALLBACK DEFINITION
  GETTING DATA AFTER EXTERNAL API REQUEST

***/

const http = require('http');

function externalAPIRequest(cb){
  let url = "http://api.openweathermap.org/data/2.5/weather?q=Bordeaux&units=metric&appid=3e0d6900003924f67b5e7d1fe93c2f37";
  http.get(url,function (result) {
      let rawData='';
      result.on('data', (chunk) => { rawData += chunk; });
      result.on('end', () => {
              const parsedData = JSON.parse(rawData);
              cb("no error",parsedData);
      });
  });
  console.log("I got throught at first")
}

externalAPIRequest(function(err,madata){
  // console.log(err);
  console.log("my data is here: ",madata);
});
