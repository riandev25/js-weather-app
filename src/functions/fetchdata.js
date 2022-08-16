const dataHandlingMetric = (() => {
  function windSpeedImperial(windspeed) {
    return windspeed * 2.23694;
  }

  function addDataMetric(cityData) {
    const inputLocation = document.querySelector("[data-input-location]");
    try {
      const feelsLikeMetric = document.querySelector(
        "[data-feels-like-metric]"
      );
      const humidityToday = document.querySelector("[data-humidity]");
      const currentTemperatureMetric =
        document.querySelector("[data-temp-metric]");
      const maxTemperatureMetric = document.querySelector(
        "[data-max-temp-metric]"
      );
      const minTemperatureMetric = document.querySelector(
        "[data-min-temp-metric]"
      );
      const windSpeed = document.querySelector("[data-wind-speed]");
      const mainWeatherIcon = document.querySelector("[data-main-icon");
      const weatherTitle = document.querySelector("[data-weather-description]");
      const cityName = document.querySelector("[data-city-name]");
      const date = document.querySelector("[data-date]");
      const days = document.querySelector("[data-days]");
      const time = document.querySelector("[data-time]");

      const {
        main: { feels_like, temp, temp_max, temp_min, humidity },
        wind: { speed },
        name,
        dt,
        weather: {
          0: { description, icon },
        },
      } = cityData;

      const setDay = new Date().toLocaleString("en-us", { weekday: "long" });
      const setTime = new Intl.DateTimeFormat("en", {
        timeStyle: "short",
      });

      const setDate = new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
      });

      feelsLikeMetric.innerText = `${Math.round(feels_like)} °C`;
      humidityToday.innerText = `${Math.round(humidity)} %`;
      currentTemperatureMetric.innerText = `${Math.round(temp)} °C`;
      maxTemperatureMetric.innerText = `${Math.round(temp_max)} °C`;
      minTemperatureMetric.innerText = `${Math.round(temp_min)} °C`;
      windSpeed.innerText = `${Math.round(windSpeedImperial(speed))} mph`;
      weatherTitle.innerText = `${description}`;
      weatherTitle.classList.add("capitalize");
      cityName.innerText = `${name}`;
      mainWeatherIcon.src = `./images/icons/${icon}.png`;
      date.innerText = `${setDate.format(Date.now())} `;
      days.innerText = `${setDay} | `;
      time.innerText = `${setTime.format(Date.now())}`;
    } catch (error) {
      inputLocation.innerText = "";
      console.log(error.message);
    }
  }
  return { addDataMetric };
})();

export default dataHandlingMetric;
