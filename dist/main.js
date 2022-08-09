(()=>{"use strict";const e={addDataMetric:function(e){const t=document.querySelector("[data-input-location]");try{const t=document.querySelector("[data-feels-like-metric]"),n=document.querySelector("[data-humidity]"),o=document.querySelector("[data-temp-metric]"),r=document.querySelector("[data-max-temp-metric]"),c=document.querySelector("[data-min-temp-metric]"),i=document.querySelector("[data-wind-speed]"),d=document.querySelector("[data-main-icon"),u=document.querySelector("[data-weather-description]"),l=document.querySelector("[data-city-name]"),s=document.querySelector("[data-date]"),m=document.querySelector("[data-days]"),p=document.querySelector("[data-time]"),{main:{feels_like:y,temp:h,temp_max:g,temp_min:S,humidity:f},wind:{speed:w},name:q,dt:x,weather:{0:{description:$,icon:T}}}=e,v=(new Date).toLocaleString("en-us",{weekday:"long"}),M=new Intl.DateTimeFormat("en",{timeStyle:"short"}),D=new Intl.DateTimeFormat("en",{dateStyle:"medium"});t.innerText=`${Math.round(y)} °C`,n.innerText=`${Math.round(f)} %`,o.innerText=`${Math.round(h)} °C`,r.innerText=`${Math.round(g)} °C`,c.innerText=`${Math.round(S)} °C`,i.innerText=`${Math.round((a=w,2.23694*a))} mph`,u.innerText=`${$}`,u.classList.add("capitalize"),l.innerText=`${q}`,d.src=`./images/icons/${T}.png`,s.innerText=`${D.format(Date.now())} `,m.innerText=`${v} | `,p.innerText=`${M.format(Date.now())}`}catch(e){t.innerText="",console.log(e.message)}var a}},t=e,a=async function(e){const a=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`,n=await fetch(a),o=await n.json();t.addDataMetric(o)},n=(()=>{async function e(e){const{latitude:a,longitude:n}=e.coords,o=`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${n}&units=metric&appid=0ca5172a4c10f3ea5fabc8ee7143f475`,r=await fetch(o),c=await r.json();t.addDataMetric(c),console.log(c)}function a(e){return console.log(e.message)}return{viaGeoLocation:function(){return navigator.geolocation?navigator.geolocation.getCurrentPosition(e,a):alert("Your browser does not support geolocation.")}}})(),o=document.querySelectorAll("[data-carousel-button]"),r=document.querySelector("[data-input-location]");n.viaGeoLocation(),r.addEventListener("keyup",(e=>{"Enter"===e.key&&(a(r.value),r.value="")})),o.forEach((e=>{e.addEventListener("click",(()=>{const t="next"===e.dataset.carouselButton?1:-1,a=e.closest("[data-carousel]").querySelector("[data-slides]"),n=a.querySelector("[data-active]");let o=[...a.children].indexOf(n)+t;o<0&&(o=a.children.length-1),o>=a.children.length&&(o=0),a.children[o].dataset.active=!0,delete n.dataset.active}))}))})();