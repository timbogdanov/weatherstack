const API_KEY = '4c4a01229bdd721de8641c3243a55c33';

const searchInput = document.querySelector('.search-input');

// Storing HTML classes in constants
const country = document.querySelector('.country-name');
const region = document.querySelector('.region-name');
const city = document.querySelector('.city-name');

const icon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let inputValue = searchInput.value;

    fetch(
      `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${inputValue}&units=f`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Setting text/image content with returned data
        country.textContent = data.location.country;
        region.textContent = data.location.region;
        city.textContent = data.location.name;

        icon.src = data.current.weather_icons[0];
        temp.textContent = data.current.temperature;
        feelsLike.textContent = data.current.feelslike;
        humidity.textContent = data.current.humidity;
      })
      .catch((error) => console.log(error));
  }
});
