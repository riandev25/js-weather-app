import currentInputWeather from "./inputloc";
import currentGeoWeather from "./geolocation";

const buttons = document.querySelectorAll("[data-carousel-button]");
const inputLocation = document.querySelector("[data-input-location]");
const tempConversion = document.querySelector("[data-conversion]");

inputLocation.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    currentInputWeather.viaInputLocation(inputLocation.value);
    inputLocation.value = "";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

tempConversion.addEventListener("click", () => {
  const offset = 1;
  const slides = document.querySelector(".first-section");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
});

currentGeoWeather.viaGeoLocation();
