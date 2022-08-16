const hourly = () => {
  const hourlyButton = document.getElementById("hourly-button");
  const options = document.querySelector("[data-options]");
  const activeButton = options.querySelector("[data-active]");
  const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  const dailyWeather = document.querySelector(".daily-weather");

  hourlyButton.dataset.active = true;
  delete activeButton.dataset.active;
  dailyWeather.dataset.active = true;
  delete activeSlide.dataset.active;
};

export default hourly;
