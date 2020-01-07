const request =  require ('request');
const argv = require('yargs').argv;


// let city = 'portland';
let city = argv.c || 'paris';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`






request(url, function (err, response, body) {
  if(err){

    console.log('error:', error);

  } else {

    let weather = JSON.parse(body)
    let message = `Il fait ${weather.main.temp} degrés au
    ${weather.name}!`;
    console.log(message);

  }
});