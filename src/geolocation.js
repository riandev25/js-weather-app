import dataHandlingMetric from "./fetchdata";

const currentGeoWeather = (() => {
  async function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`;
    const response = await fetch(api);
    const cityData = await response.json();
    dataHandlingMetric.addDataMetric(cityData);
    console.log(cityData);
  }

  function onError(error) {
    return console.log(error.message);
  }

  function viaGeoLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    return alert("Your browser does not support geolocation.");
  }
  return { viaGeoLocation };
})();

export default currentGeoWeather;
