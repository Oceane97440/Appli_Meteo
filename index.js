let request =  require ('request');
let apiKey = '5eb496365af244e0fb985ce93ebedd65';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`






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