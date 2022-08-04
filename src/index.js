// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach(button => {
//   button.addEventListener("click", e => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active

//   })
// })
let apiKey = '0ca5172a4c10f3ea5fabc8ee7143f475'
const buttons = document.querySelectorAll("[data-carousel-button]")
const inputLocation = document.querySelector("input")

const feelsLike = document.getElementById("feels-like")
const humidityToday = document.getElementById("humidity")
const currentTemperature = document.querySelector(".temp")
const maxTemperature = document.getElementById(".temperature-carousel") // Ongoing
const minTemperature = document.querySelectorAll(".temperature-carousel-lowest") // Ongoing
const windSpeed = document.getElementById("wind-speed")
const mainWeatherIcon = document.getElementById("generated-main-icon")
const weatherTitle = document.querySelector(".title")



inputLocation.addEventListener("keyup", e => {
  // e.preventDefault()
  // if user pressed enter button and input value is not ""
  if (e.key == "Enter" && inputLocation.value != "") {
    requestApi(inputLocation.value)
  }
})

browserSupportsGeolocation()

function browserSupportsGeolocation () {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(onSuccess, onError)
  } else {
    alert("Your browser does not support geolocation.")
  }
}

async function onSuccess(position) {
  const {latitude, longitude} = position.coords;
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`
  const response = await fetch(api)
  const cityData = await response.json()
  weatherDetailsToday(cityData)
}

function onError(error) {
  console.log(error)
}

async function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`
  const response = await fetch(api)
  const cityData = await response.json()
  weatherDetailsToday(cityData)
}

function weatherDetailsToday(cityInfo) {
  if (cityInfo.cod == "404") {
    inputLocation.innerText = ""
  } else {
    const {feels_like, humidity, temp, temp_max, temp_min} = cityInfo.main
    const {speed} = cityInfo.wind
    const {description, icon} = cityInfo.weather[0]
    // const {icon} = cityInfo.weather
    feelsLike.innerText = `${Math.round(feels_like)} °C`
    humidityToday.innerText = `${Math.round(humidity)} %`
    currentTemperature.innerText = `${Math.round(temp)} °C`
    windSpeed.innerText = `${Math.round(windSpeedToImperialUnit(speed))} mph`
    weatherTitle.innerText = `${description}`
    weatherTitle.classList.add("capitalize")
    mainWeatherIcon.src =  `./images/icons/${icon}.png`
    // console.log(mainWeatherIcon)
    // maxTemperature.innerText = `${Math.round(temp_max)} °C`
    // minTemperature.innerText = `${Math.round(temp_min)} °C`
    console.log(cityInfo)
  }
}

function windSpeedToImperialUnit(windspeed) {
  return (windspeed * 2.23694)
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// const dayWeatherTemplate = document.getElementById("day-weather-template")

// function renderWeekWeather () {
//   for (let i=0; i<7; i++) {
//     const listDayWeather = document.importNode(dayWeatherTemplate.content, true)
//     const h3 = listDayWeather.querySelector("h3")
//     daysOfTheWeek.forEach(day => {
//       h3.append(day)
//     })
//   }
// }