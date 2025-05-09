# Weather App

A modern, responsive weather application built with HTML, CSS, and JavaScript that allows users to check weather conditions for any city around the world.

## Features

- 🌤️ Real-time weather data using OpenWeatherMap API
- 🌓 Dark/Light mode toggle with system preference detection
- 🎨 Dynamic background images based on weather conditions
- 📱 Fully responsive design for all devices
- 🔍 City search functionality
- 💾 Theme preference persistence using localStorage

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter)
- Vanilla JavaScript (ES6+)
- OpenWeatherMap API

## Setup and Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)

3. Replace the API key in `script.js`:
```javascript
const API_KEY = 'your-api-key-here';
```

4. Open `index.html` in your browser or use a local server

## Usage

1. Enter a city name in the search box
2. Press Enter or click the Search button
3. View the current weather information
4. Toggle between dark and light mode using the theme button

## Weather Information Displayed

- City name
- Temperature in Celsius
- Weather description

## Background Images

The app automatically changes its background based on the current weather condition:
- Clear/Sunny
- Cloudy
- Rainy
- Thunderstorm
- Snowy

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Background images from [Unsplash](https://unsplash.com/) 