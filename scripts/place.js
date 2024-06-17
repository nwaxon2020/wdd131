const weatherInfo = document.getElementById("weather");

let temp = 10;
let wind = 5;
let condition = "Sunny Day";
let windChill;

if(temp <= 10 && wind > 4.8){

    windChill = `${calculateWindChill(temp, wind)}`;
}
else{
    temp = "N/A";
}

function calculateWindChill(temps, winds){

    return (13.12 + 0.6215 * temps - 11.37 * Math.pow(winds, 0.16) + 0.3965 * temps * Math.pow(winds, 0.16)).toFixed(2);
}

weatherInfo.innerHTML = `
    <li><span>Temprature:</span> ${temp}°C</li>
    <li><span>Conditions:</span> ${condition}</li>
    <li><span>Wind:</span> ${wind} km/h</li>
    <li><span>Wind Chill:</span> ${windChill}°C</li>`