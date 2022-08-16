import currentInputWeather from "./functions/inputloc";
import currentGeoWeather from "./functions/geolocation";
import daily from "./functions/dailyButton";
import hourly from "./functions/hourlyButton";

const dailyButton = document.getElementById("daily-button");
const hourlyButton = document.getElementById("hourly-button");
const inputLocation = document.querySelector("[data-input-location]");

currentGeoWeather.viaGeoLocation();

inputLocation.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    currentInputWeather.viaInputLocation(inputLocation.value);
    inputLocation.value = "";
  }
});

dailyButton.addEventListener("click", () => {
  daily();
});

hourlyButton.addEventListener("click", () => {
  hourly();
});

// const buttons = document.querySelectorAll("[data-carousel-button]");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });
