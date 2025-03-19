const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap

// Function to get weather data
async function getWeather() {
  const city = document.getElementById('city').value;
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    // Update the UI with the weather data
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Show the weather result
    document.getElementById('weather-result').style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching the weather data.');
  }
}
