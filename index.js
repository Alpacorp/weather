const skyText = document.getElementById('skyText');
const tem = document.getElementById('temp');
const icon = document.getElementById('iconDay');
const dayTomorrow = document.getElementById('tomorrow');
const dayAfter = document.getElementById('after');
const dayPast = document.getElementById('past');
const tomorrowWeather = document.getElementById('tomorrowWeather');
const afterW = document.getElementById('afterW');
const pastW = document.getElementById('pastW');
const tomorrowIcon = document.getElementById('tomorrowIcon');
const afterIcon = document.getElementById('afterIcon');
const pastIcon = document.getElementById('pastIcon');
const maxT = document.getElementById('maxT');
const minT = document.getElementById('minT');
const maxA = document.getElementById('maxA');
const minA = document.getElementById('minA');
const maxP = document.getElementById('maxP');
const minP = document.getElementById('minP');
const parisTemp = document.getElementById('parisTemp');
const parisHum = document.getElementById('parisHum');
const parisWind = document.getElementById('parisWind');
const parisIcon = document.getElementById('parisIcon');
const lyonTemp = document.getElementById('lyonTemp');
const lyonHum = document.getElementById('lyonHum');
const lyonWind = document.getElementById('lyonWind');
const lyonIcon = document.getElementById('lyonIcon');


document.addEventListener("DOMContentLoaded", function () {

    // Weather Bogotá

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota,col&appid=d208aa4b84148290c0fa8b2b7c8e5a89&units=metric';

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let data = JSON.parse(this.responseText);

            console.log(data);

            let sky = data.weather[0].description;
            let temp = data.main.temp;
            let iconWeather = data.weather[0].icon;
            let innerIcon = `http://openweathermap.org/img/wn/${iconWeather}@4x.png`

            skyText.innerHTML = sky;
            tem.innerHTML = temp + '<sup>Cº</sup>';
            icon.setAttribute('src', innerIcon);
        }
    }

    // Weather Paris, FRA

    const parisWeather = () => {

        let urlParis = 'https://api.openweathermap.org/data/2.5/weather?q=Paris,fra&appid=d208aa4b84148290c0fa8b2b7c8e5a89&units=metric';

        const apiParis = new XMLHttpRequest();
        apiParis.open('GET', urlParis, true);
        apiParis.send();

        apiParis.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                let dataParis = JSON.parse(this.responseText);

                console.log(dataParis);

                let temp = dataParis.main.temp;
                let hum = dataParis.main.humidity;
                let wind = dataParis.wind.speed;
                let icon = dataParis.weather[0].icon;
                let urlIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`

                parisTemp.innerHTML = temp + '<sup>ºC</sup>';
                parisHum.innerHTML = hum + ' %';
                parisWind.innerHTML = wind + ' Km/h';
                parisIcon.setAttribute('src', urlIcon);
            }
        }
    }

    parisWeather();

    // Weather Lyon, FRA

    const lyonWeather = () => {

        let urlLyon = 'https://api.openweathermap.org/data/2.5/weather?q=Lyon,fra&appid=d208aa4b84148290c0fa8b2b7c8e5a89&units=metric';

        const apiLyon = new XMLHttpRequest();
        apiLyon.open('GET', urlLyon, true);
        apiLyon.send();

        apiLyon.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                let dataLyon = JSON.parse(this.responseText);

                console.log(dataLyon);

                let temp = dataLyon.main.temp;
                let hum = dataLyon.main.humidity;
                let wind = dataLyon.wind.speed;
                let icon = dataLyon.weather[0].icon;
                let urlIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`

                lyonTemp.innerHTML = temp + '<sup>ºC</sup>';
                lyonHum.innerHTML = hum + ' %';
                lyonWind.innerHTML = wind + ' Km/h';
                lyonIcon.setAttribute('src', urlIcon);
            }
        }
    }

    lyonWeather();

    // Weather Forecast

    let urlForecast = 'https://api.openweathermap.org/data/2.5/onecall?lat=4.6486259&lon=-74.2478948&exclude=hourly,minutely&appid=d208aa4b84148290c0fa8b2b7c8e5a89&units=metric';

    const apiForecast = new XMLHttpRequest();
    apiForecast.open('GET', urlForecast, true);
    apiForecast.send();

    apiForecast.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let dataForecast = JSON.parse(this.responseText);

            console.log(dataForecast.daily);
            console.log(dataForecast.daily[1].weather);
            console.log(dataForecast.daily);

            // Get Day

            let tomorrow = dataForecast.daily[1].dt;
            let afterTomorrow = dataForecast.daily[2].dt;
            let pastTomorrow = dataForecast.daily[3].dt;

            // Get main weather

            let tomorrowW = dataForecast.daily[1].weather[0].main;
            let afterTomorrowW = dataForecast.daily[2].weather[0].main;
            let pastTomorrowW = dataForecast.daily[3].weather[0].main;

            tomorrowWeather.innerHTML = tomorrowW;
            afterW.innerHTML = afterTomorrowW;
            pastW.innerHTML = pastTomorrowW;

            // Get Icon Weather

            let tomorrowI = dataForecast.daily[1].weather[0].icon;
            let afterTomorrowI = dataForecast.daily[2].weather[0].icon;
            let pastTomorrowI = dataForecast.daily[3].weather[0].icon;

            let innerIconT = `https://openweathermap.org/img/wn/${tomorrowI}@4x.png`
            let innerIconA = `https://openweathermap.org/img/wn/${afterTomorrowI}@4x.png`
            let innerIconP = `https://openweathermap.org/img/wn/${pastTomorrowI}@4x.png`

            tomorrowIcon.setAttribute('src', innerIconT);
            afterIcon.setAttribute('src', innerIconA);
            pastIcon.setAttribute('src', innerIconP);

            // Get Max and Min Temp

            // Max

            let tomorrowMax = dataForecast.daily[1].temp.max;
            let afterMax = dataForecast.daily[2].temp.max;
            let pastMax = dataForecast.daily[3].temp.max;

            maxT.innerHTML = tomorrowMax + '<sup>ºC</sup>';
            maxA.innerHTML = afterMax + '<sup>ºC</sup>';
            maxP.innerHTML = pastMax + '<sup>ºC</sup>';

            // Min

            let tomorrowMin = dataForecast.daily[1].temp.min;
            let afterMin = dataForecast.daily[2].temp.min;
            let pastMin = dataForecast.daily[3].temp.min;

            minT.innerHTML = tomorrowMin + '<sup>ºC</sup>';
            minA.innerHTML = afterMin + '<sup>ºC</sup>';
            minP.innerHTML = pastMin + '<sup>ºC</sup>';

            // Array Week Days

            let days = [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ];

            dayTomorrowName = '';

            let tomorrowTimestamp = tomorrow * 1000;
            let afterTimestamp = afterTomorrow * 1000;
            let pastTimestamp = pastTomorrow * 1000;

            let dateTomorrow = new Date(tomorrowTimestamp);
            let dateAfter = new Date(afterTimestamp);
            let datePast = new Date(pastTimestamp);

            let dateDay = dateTomorrow.getDate();

            switch (dateDay) {
                case 0:
                    dayTomorrowName = days[0]
                    break;
                case 1:
                    dayTomorrowName = days[1]
                    break;
                case 2:
                    dayTomorrowName = days[2]
                    break;
                case 3:
                    dayTomorrowName = days[3]
                    break;
                case 4:
                    dayTomorrowName = days[4]
                    break;
                case 5:
                    dayTomorrowName = days[5]
                    break;
                case 6:
                    dayTomorrowName = days[6]
                    break;
                default:
                    break;
            }

            dayTomorrow.innerHTML = dayTomorrowName;

            dayAfterName = '';

            let dateAfterDay = dateAfter.getDate();

            switch (dateAfterDay) {
                case 0:
                    dayAfterName = days[0]
                    break;
                case 1:
                    dayAfterName = days[1]
                    break;
                case 2:
                    dayAfterName = days[2]
                    break;
                case 3:
                    dayAfterName = days[3]
                    break;
                case 4:
                    dayAfterName = days[4]
                    break;
                case 5:
                    dayAfterName = days[5]
                    break;
                case 6:
                    dayAfterName = days[6]
                    break;
                default:
                    break;
            }

            dayAfter.innerHTML = dayAfterName;

            dayPastName = '';

            let datePastDay = datePast.getDate();

            switch (datePastDay) {
                case 0:
                    dayPastName = days[0]
                    break;
                case 1:
                    dayPastName = days[1]
                    break;
                case 2:
                    dayPastName = days[2]
                    break;
                case 3:
                    dayPastName = days[3]
                    break;
                case 4:
                    dayPastName = days[4]
                    break;
                case 5:
                    dayPastName = days[5]
                    break;
                case 6:
                    dayPastName = days[6]
                    break;
                default:
                    break;
            }
            dayPast.innerHTML = dayPastName;
        }
    }
});