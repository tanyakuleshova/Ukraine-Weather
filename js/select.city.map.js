function selectCityOnMap(){
    var map = document.querySelector('.map_container');

    document.querySelector('.Uzhgorod').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2083' + 'px'; 
        map.style.backgroundPositionY = '-970' +'px';
    })
    document.querySelector('.Lviv').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-490' +'px';
    })

    document.querySelector('.Ivano-Frankivsk').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-701' + 'px'; 
        map.style.backgroundPositionY = '-490' +'px';
    })
    document.querySelector('.Chernivtsi').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-1392' + 'px'; 
        map.style.backgroundPositionY = '-10' +'px';
    })
    document.querySelector('.Ternopil').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-701' + 'px'; 
        map.style.backgroundPositionY = '-970' +'px';
    })
    document.querySelector('.Rivne').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-970' +'px';
    })
    document.querySelector('.Lutsk').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-1392' + 'px'; 
        map.style.backgroundPositionY = '-490' +'px';
    })
    document.querySelector('.Khmelnytskyy').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-1450' +'px';
    })
    document.querySelector('.Zhytomyr').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-1392' + 'px'; 
        map.style.backgroundPositionY = '-970' +'px';
    })
    document.querySelector('.Vinnytsya').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-10' +'px';
    })
    document.querySelector('.Kiev').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2083' + 'px'; 
        map.style.backgroundPositionY = '-490' +'px';
    })
    document.querySelector('.Cherkasy').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2083' + 'px'; 
        map.style.backgroundPositionY = '-1450' +'px';
    })
    document.querySelector('.Kirovohrad').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-1930' +'px';
    })
    document.querySelector('.Mykolayiv').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-701' + 'px'; 
        map.style.backgroundPositionY = '-2410' +'px';
    })
    document.querySelector('.Chernihiv').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-1392' + 'px'; 
        map.style.backgroundPositionY = '-2410' +'px';
    })
    document.querySelector('.Sumy').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2774' + 'px'; 
        map.style.backgroundPositionY = '-490' +'px';
    })
    document.querySelector('.Poltava').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2774' + 'px'; 
        map.style.backgroundPositionY = '-10' +'px';
    })
    document.querySelector('.Dnipropetrovsk').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2083' + 'px'; 
        map.style.backgroundPositionY = '-1930' +'px';
    })
    document.querySelector('.Zaporizhzhya').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2774' + 'px'; 
        map.style.backgroundPositionY = '-1930' +'px';
    })
    document.querySelector('.Kherson').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-1392' + 'px'; 
        map.style.backgroundPositionY = '-1930' +'px';
    })
    document.querySelector('.Krym').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-701' + 'px'; 
        map.style.backgroundPositionY = '-1930' +'px';
    })
    document.querySelector('.Kharkiv').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2774' + 'px'; 
        map.style.backgroundPositionY = '-970' +'px';
    })
    document.querySelector('.Luhansk').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-10' + 'px'; 
        map.style.backgroundPositionY = '-2410' +'px';
    })
    document.querySelector('.Donetsk').addEventListener('mouseover', function(){
        map.style.backgroundPositionX = '-2774' + 'px'; 
        map.style.backgroundPositionY = '-1450' +'px';
    })
    var Odessa = document.querySelectorAll('.Odessa-North, .Odessa-South');
    for (var i = 0; i < Odessa.length; i++) {
        Odessa[i].addEventListener('mouseover', function () {
            map.style.backgroundPositionX = '-2083' + 'px';
            map.style.backgroundPositionY = '-10' + 'px';
        })
    }

    var map_cities = document.querySelectorAll('.map_container div')
    for(var i = 0; i < map_cities.length; i++){
        map_cities[i].addEventListener('mouseout', mapReset);
        map_cities[i].addEventListener('click', displaySelectedCity);
    }

    function mapReset(){
        map.style.backgroundPositionX = '-701' + 'px'; 
        map.style.backgroundPositionY = '-10' +'px';
        console.log('mouseout');
    }
    function displaySelectedCity(){
        var clickedCity = event.target.getAttribute('data-cityId');
        var weather_block = document.querySelector('.weather_container');
        weather_block.innerHTML = ' ';
        getWeather(clickedCity)
        .then(weatherDisplay);
}
}
