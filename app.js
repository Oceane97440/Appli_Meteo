const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '5eb496365af244e0fb985ce93ebedd65';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
 // pour code postal api.openweathermap.org/data/2.5/weather?zip={zip code}, {country code}


  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error'});
      } else {
        let weatherText = `Il fait ${weather.main.temp} degrés à ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3001, function () {
  console.log('Connexion au port')
})

