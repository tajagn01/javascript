const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const API_KEY = '2fd93913159ca115fa7e89d3f24a7878';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  weatherInfo.textContent = 'Loading...';

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    if (res.ok) {
      weatherInfo.innerHTML = `
        <div>${data.name}</div>
        <div style="font-size:2.5rem;font-weight:700;">${Math.round(data.main.temp)}°C</div>
        <div style="font-size:1.1rem;">${data.weather[0].description}</div>
      `;
      setBackgroundByWeather(data.weather[0].main);
    } else {
      weatherInfo.textContent = data.message || 'City not found';
    }
  } catch (err) {
    weatherInfo.textContent = 'Error fetching weather data.';
  }
});

function setBackgroundByWeather(main) {
  let url;
  switch (main) {
    case 'Clear':
      url = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
      break;
    case 'Clouds':
      url = "https://images.unsplash.com/photo-1668402786143-1c81c818e315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkZXxlbnwwfHwwfHx8MA%3D%3D";
      break;
    case 'Rain':
    case 'Drizzle':
      url = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1500&q=80";
      break;
    case 'Thunderstorm':
      url = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1500&q=80";
      break;
    case 'Snow':
      url = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80";
      break;
    default:
      url = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  }
  document.body.style.backgroundImage = `url('${url}')`;
}

const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
let isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  document.body.classList.toggle('light', !dark);
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
applyTheme(isDark);

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  applyTheme(isDark);
});
