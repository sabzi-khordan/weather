let now = new Date();

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let hours = now.getHours();
let date = now.getDate();
let year = now.getFullYear();
let second = now.getSeconds();
let time = document.querySelector(".current");
time.innerHTML = ` <strong>${year} /   ${day}  / ${date} ,  ${hours} :  ${second}     </strong>`;

function action(event) {
  event.preventDefault();
  let chose = document.querySelector("#wow");
  let replace = document.querySelector(".city");
  replace.innerHTML = `${chose.value}`;
}

let citySearched = document.querySelector(".form-control");
citySearched.addEventListener("click", action);

function review() {
  temp.innerHTML = `${farenheitTemprature}`;
}
let temp = document.querySelector("#number");

let nan = document.querySelector("#sign1");

nan.addEventListener("click", review);

let temprature = 14;
let farenheitTemprature = Math.round((temprature * 9) / 5 + 32);

function review2() {
  temp.innerHTML = 14;
}

let nan2 = document.querySelector("#sign2");
nan2.addEventListener("click", review2);
function very(veryFast) {
  console.log(veryFast);
}
let whatCity = document.querySelector("#wow");
whatCity.addEventListener("submit", very);
let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric`;

let typeCity = document.querySelector("#wow");
typeCity.addEventListener("submit", visible);
function showCurrentTemprature(response) {
  let nowShowMe = document.querySelector("#number");
  nowShowMe.innerHTML = Math.round(response.data.main.temp);
}
axios.get(`${apiUrl} &appid=${apiKey}`).then(showCurrentTemprature);

function showPosition(position) {
  console.log(position.coords.latitude);
}
function loca() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let searchEngine = document.querySelector("#current-temp");
searchEngine.addEventListener("click", loca);

function visible(result) {
  let typeCityResult = document.querySelector(".city");
  typeCityResult.innerHTML = result.value;
}
