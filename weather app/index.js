const apiKey = '7e01b26d1c39f795e8f3d2bfccfff640';

const searchButton = document.getElementById('search');
const lat = document.getElementById('lat').value;
const lon = document.getElementById('lon').value;
const weatherResult = document.getElementById('weather-result');

searchButton.addEventListener('click', () => {
        // const location = locationSite.value;
     const latitude = lat.trim();
     const longitude = lon.trim();

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)

        .then(response => response.json())
        .then(data => {
                console.log(data.sys.country);
                console.log(data.weather[0].description);
        })
        .catch(error => {
                console.log('Error fetching weather data:', error);
        });

});


