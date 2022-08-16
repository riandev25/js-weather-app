const daily = () => {
  const dailyButton = document.getElementById("daily-button");
  const options = document.querySelector("[data-options]");
  const activeButton = options.querySelector("[data-active]");
  const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  const weekWeather = document.querySelector(".week-weather");

  dailyButton.dataset.active = true;
  delete activeButton.dataset.active;
  weekWeather.dataset.active = true;
  delete activeSlide.dataset.active;
};

export default daily;
