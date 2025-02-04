document.getElementById('search-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  const apiKey = '2fd93913159ca115fa7e89d3f24a7878';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const weatherApp = document.querySelector('.weather-app');
  const loadingGif = document.querySelector('.loading');

  weatherApp.classList.add('loading');
  loadingGif.style.display = 'block';

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('city-name').textContent = `Weather in ${data.name}`;
          document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
          document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
          document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch(error => {
          document.getElementById('weather-result').textContent = error.message;
      })
      .finally(() => {
          weatherApp.classList.remove('loading');
          loadingGif.style.display = 'none';
      });
});