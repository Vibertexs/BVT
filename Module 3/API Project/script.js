function renderWeather(weather){

    var result = document.getElementById("data-result");
    
    // show only the temperature, wind, name, and humidity

    var city = document.createElement("h3");
    city.textContent = weather.name;
    result.append(city);

    var details = document.createElement("p");
    // add a break between each detail
    
    // details.textContent += "Temperature: " + weather.main.temp + "°F";
    // details.textContent += "Wind: " + weather.wind.speed + "mph";
    // details.textContent += "Humidity: " + weather.main.humidity + "%";

    details.innerHTML = "<p>Temperature: " + weather.main.temp + "°F" + "<br>" + "Wind: " + weather.wind.speed + "mph" + "<br>" + "Humidity: " + weather.main.humidity + "%" + "<br></p>";

    // innerHTML is used to render the html tags in the string
    // textContent is used to render the string as plain text
    // appendChild is used to render the element as a child of the parent element
    // append is used to render the element as a sibling of the parent element


    result.append(details);
}

function fetchWeather(city){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2c1ebcf54d4adab1348f58935d6ee373";

    fetch(url)
    .then(response => response.json())
    .then(data => {
         console.log(data);
        renderWeather(data);
    }).catch(error => console.log("Could not fetch data. Error: " + error + "."));

}

fetchWeather();