const temperature = document.getElementById('temperature');
const icon = document.getElementById('icon');
const conditions = document.getElementById('conditions');
const region = document.getElementById('region');
console.log(location);
const dateTime = document.getElementById('dateTime');

const searchForm = document.getElementById('searchForm');
const searchBar = document.getElementById('searchBar');

searchForm.addEventListener('submit', event => {
	event.preventDefault();
	updateWeather(searchBar.value);
});

function updateWeather(location) {
	fetch(`https://api.weatherapi.com/v1/current.json?key=5f62ab4b1dfb49de9a7223916230604&q=${location}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			console.log(response);
			temperature.innerText = Math.round(response.current.temp_f);
			conditions.innerText = response.current.condition.text;
			region.innerText = `${response.location.name}, ${response.location.region}`;
			dateTime.innerText = response.location.localtime;
		})
		.catch(error => {
			console.log(error);
		})
}