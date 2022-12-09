const url = "https://api.openweathermap.org/data/2.5/";
const key = "cd1d162b41c96252af6ed79aa2db8990";

var tempBody = document.querySelector(".cont");
var searchBtn = document.getElementById("searchBtn");

document.querySelector("body").style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/017/663/252/original/anastasia-kozheko-normal.gif?1645074105')";

searchBtn.onclick = () => {
	getResult(searchBar.value);
};

const setQuery = (e) => {
	if (e.keyCode == "13") {
		getResult(searchBar.value);
	}
};

const getResult = (cityName) => {
	let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
	fetch(query)
		.then((weather) => {
			return weather.json();
		})
		.then(displayResult);
};

const weatherStatus = (status) => {
	switch (status) {
		case "parçalı bulutlu":
			tempBody.style.backgroundImage = "url('./parcaliBulutlu.jpg')";
			break;
		case "parçalı az bulutlu":
			tempBody.style.backgroundImage = "url('./parcaliBulutlu.jpg')";
			break;
		case "az bulutlu":
			tempBody.style.backgroundImage = "url('./parcaliBulutlu.jpg')";
			break;
		case "hafif kar yağışlı":
			tempBody.style.backgroundImage = "url('./karli.png')";
			break;
		case "kapalı":
			tempBody.style.backgroundImage = "url('./parcaliBulutlu.jpg')";
			break;
		case "açık":
			tempBody.style.backgroundImage = "url('./acik.jpg')";
			break;
		case "sisli":
			tempBody.style.backgroundImage = "url('./sisli.jpg')";
			break;
		case "karlı":
			tempBody.style.backgroundImage = "url('./karli.png')";
			break;
		case "yağmurlu":
			tempBody.style.backgroundImage = "url('./yagmurlu.jpeg')";
			break;
		case "hafif yağmur":
			tempBody.style.backgroundImage = "url('./yagmurlu.jpeg')";
			break;
		case "güneşli":
			tempBody.style.backgroundImage = "url('./gunesli.png')";
			break;
		default:
			break;
	}
};

const displayResult = (result) => {
	console.log(result);
	let city = document.querySelector(".city");
	city.innerText = `${result.name} , ${result.sys.country}`;

	let temp = document.querySelector(".temp");
	temp.innerText = `${Math.round(result.main.temp)}°c`;

	let desc = document.querySelector(".desc");
	desc.innerHTML = result.weather[0].description;
	weatherStatus(result.weather[0].description);
	let minmax = document.querySelector(".minmax");
	minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(
		result.main.temp_max
	)}°c`;
};

const searchBar = document.getElementById("serachBar");
searchBar.addEventListener("keypress", setQuery);

searchBar.value = "Elâzığ";
getResult("Elâzığ");
