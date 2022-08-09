import dataHandlingMetric from "./fetchdata";

const currentInputWeather = (() => {
  async function viaInputLocation(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`;
    const response = await fetch(api);
    const cityData = await response.json();
    dataHandlingMetric.addDataMetric(cityData);
  }
  return { viaInputLocation };
})();

export default currentInputWeather;
