const apiKey = "f00634fbe386647f15d0262b2db76922";

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod != 200) {
      alert("City not found!");
      return;
    }

    // City Name
    document.getElementById("cityName").innerHTML =
      `${data.name}, ${data.sys.country}`;

    // Date & Time
    document.getElementById("date").innerHTML = new Date().toLocaleString();

    // Temperature
    document.getElementById("temp").innerHTML =
      `${Math.round(data.main.temp)}°C`;

    // Weather Condition
    document.getElementById("condition").innerHTML = data.weather[0].main;

    // Humidity
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;

    // Wind
    document.getElementById("wind").innerHTML = `${data.wind.speed} km/h`;

    // Pressure
    document.getElementById("pressure").innerHTML = `${data.main.pressure} hPa`;

    // Visibility
    document.getElementById("visibility").innerHTML =
      `${data.visibility / 1000} km`;

    // Weather Icon
    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.log(error);
  }
}
