window.onload = function () {   
    getJson()
        .then(renderList)
        .then(appearPage)
        .then(selectCityOnMap)
        .then(defaultSelectedCity)
}

function getJson(){
        var async = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'city.list.json', true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(xhr.responseText);
                }
            } 
        })
        return async;
    }

function renderList(response) {
    var items = JSON.parse(response);
    items.sort(function (obj1, obj2) {
            if (obj1.name < obj2.name) return -1;
            if (obj1.name > obj2.name) return 1;
            return 0;
        });
    
    items.forEach(function(item, pos){
            if (item.country === 'UA') {
                createCityList(item);
            }
        })
}


function createCityList(item) {
    var cityList = document.querySelector('.cities');
    var option = document.createElement('option');
    cityList.append(option);
    option.innerHTML = item.name;
    option.value = item.id;
    var select = document.querySelector('.cities');

    var regionalCities = 
    [703448, 689558, 709717, 709930, 686967, 687700, 707471, 705812, 
    702658, 702550, 702569, 700569, 698740, 696643, 695594, 692194, 
    691650, 690548, 706483, 706448, 706369, 710735, 710791, 710719, 703883];

   for(i=0; i<regionalCities.length; i++){
    if(option.value == regionalCities[i]){
        option.style.fontSize = '18' + 'px';
   }

    select.addEventListener('change', changeSelection);
}
}

function appearPage(){
    var page = document.querySelector('.wrapper');
    page.style.visibility = 'visible';
}

function defaultSelectedCity(){
    var defaultCity = 703448;
    getWeather(defaultCity)
        .then(weatherDisplay);
}

function changeSelection(){
    var select = document.querySelector('.cities');
    var selected = select.options[select.selectedIndex];
    console.log("The selected option is " + selected.value);
    var selectedCity = selected.value;
    var weather_block = document.querySelector('.weather_container');
    weather_block.innerHTML = ' ';
    getWeather(selectedCity)
        .then(weatherDisplay);
}

function getWeather(selectedCity){
    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=' + selectedCity + '&APPID=74ffeeae1d161fcd53b73979b04e1709', true);
        // xhr.withCredentials = true;
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                resolve(xhr.responseText);
            }
        } 
    })
    return promise;
}

function weatherDisplay(response){
    console.log(response);
    var items = JSON.parse(response);
    var keys = [];
    items.weather.forEach(function(key, pos){
        keys.push(key)
    })
    var weather = keys[0];

    var weather_block = document.querySelector('.weather_container');

    var city = document.createElement('div');
    city.classList.add('city');
    city.innerHTML = items.name;
    weather_block.append(city);

    var weather_description = document.createElement('div');
    weather_description.classList.add('description');
    weather_description.innerHTML = weather.description;
    weather_block.append(weather_description);

    var weather_image = document.createElement('div');
    weather_image.classList.add('weather_image');
    weather_description.append(weather_image);
    if(weather.icon == '13n'){
    weather_image.style.backgroundImage = "url('images/night_snow.png')";
    }else if(weather.icon == '01n' || weather.icon == '02n'){
        weather_image.style.backgroundImage = "url('images/night_clear_sky.png')";
    }else if(weather.icon == '09n' || weather.icon == '10n'){
        weather_image.style.backgroundImage = "url('images/night_rain.png')";
    }else if(weather.description == 'clear sky' || weather.icon == '01d'){
        weather_image.style.backgroundImage = "url('images/clear_sky.png')";
    } else if(weather.description == 'broken clouds' || weather.description == 'overcast clouds'){
        weather_image.style.backgroundImage = "url('images/broken_clouds.png')";
    } else if(weather.description == 'few clouds'){
        weather_image.style.backgroundImage = "url('images/few_clouds.png')";
    } else if(weather.description == 'scattered clouds'){
        weather_image.style.backgroundImage = "url('images/scattered_clouds.png')";
    } else if(weather.description == 'rain' || weather.icon == '10d'){
        weather_image.style.backgroundImage = "url('images/rain.png')";
    } else if(weather.description == 'shower rain' || weather.icon == '9d' || weather.icon == '13d'){
        weather_image.style.backgroundImage = "url('images/rain.png')";
    } else if(weather.description == 'thunderstorm' || weather.icon == '11d'){
        weather_image.style.backgroundImage = "url('images/thunderstorm.png')";
    } else if(weather.description == 'snow' || weather.icon == '13d'){
        weather_image.style.backgroundImage = "url('images/snow.png')";
    } else if(weather.description == 'mist' || weather.icon == '50d'){
        weather_image.style.backgroundImage = "url('images/mist.png')";
    } else if(weather.description == 'drizzle' || weather.icon == '09d'){
        weather_image.style.backgroundImage = "url('images/drizzle.png')";
    }
        
    var weather_param = document.createElement('table');
    weather_param.classList.add('weather_table');
    weather_block.append(weather_param);

    var tr1 = document.createElement('tr');
    weather_param.append(tr1);
    var temperature = document.createElement('td');
    temperature.innerHTML = 'temperature: ';
    tr1.append(temperature);
    var temp_value = document.createElement('td');
    temp_value.classList.add('temp');
    var temp = Math.round(items.main.temp - 273);
    temp_value.innerHTML = temp + '°C';
    tr1.append(temp_value);

    var tr2 = document.createElement('tr');
    weather_param.append(tr2);
    var wind = document.createElement('td');
    wind.innerHTML = 'wind speed: ';
    tr2.append(wind);
    var wind_value = document.createElement('td');
    var wind_speed = items.wind.speed;
    wind_value.innerHTML = wind_speed + 'km/h';
    tr2.append(wind_value);

    var tr3 = document.createElement('tr');
    weather_param.append(tr3);
    var moisture = document.createElement('td');
    moisture.innerHTML = 'moisture: ';
    tr3.append(moisture);
    var moisture_value = document.createElement('td');
    var moisture_pers = items.main.humidity;
    moisture_value.innerHTML = moisture_pers + '%';
    tr3.append(moisture_value);

}