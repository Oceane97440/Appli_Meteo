var city = 'Réunion' ; // ajouter la ville qui vous interesse

var http = require('http');    //permet de travailler sur URL

function printMessage(city, temperature){      //recuperation des données

console.log(" Ville:  " + city +  " temperature: " + temperature +  " Degrés " );

}
var request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5eb496365af244e0fb985ce93ebedd65&units=metric`, function (response){
var body = "  ";
response.on('data', function (chunk) {

body += chunk;

});

response.on('end', function () {

try{
var data_weather = JSON.parse(body);
printMessage(city, data_weather.main.temp);
}

catch(error){
console.error(" ville incorrect ");
}
});

});