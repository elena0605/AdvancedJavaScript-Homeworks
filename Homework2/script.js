// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

const btn = document.getElementsByTagName("button")[0];
const btnNext = document.getElementsByTagName("button")[2];
const btnPrevious = document.getElementsByTagName("button")[1];

const API_URL = "https://swapi.dev/api/planets/?page=1";
const API_URL_PAGE_TWO = "https://swapi.dev/api/planets/?page=2";

const table = document.getElementById("myTable");

const printsPlanets = function (planets) {
	const planetsArray = planets.results;

	// replace the table body with the first row of headers
	table.getElementsByTagName("tbody")[0].innerHTML = table.rows[0].innerHTML;

	// populate table with the data starting with the second row
	let tableRowNumber = 1;
	for (const planet of planetsArray) {
		const row = table.insertRow(tableRowNumber);

		const cell0 = row.insertCell(0);
		const cell1 = row.insertCell(1);
		const cell2 = row.insertCell(2);
		const cell3 = row.insertCell(3);

		cell0.innerHTML = `${planet.name}`;
		cell1.innerHTML = `${planet.climate}`;
		cell2.innerHTML = `${planet.gravity}`;
		cell3.innerHTML = `${planet.population}`;

		tableRowNumber++;
	}
};

const fetchCall = function (url) {
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			printsPlanets(data);
		});
};

btn.addEventListener("click", function () {
	fetchCall(API_URL);
	btn.classList.add("hide");
	btnNext.classList.add("show");
});

btnNext.addEventListener("click", function () {
	fetchCall(API_URL_PAGE_TWO);
	btnNext.classList.remove("show");
	btnNext.classList.add("hide");
	btnPrevious.classList.add("show");
});

btnPrevious.addEventListener("click", function () {
	fetchCall(API_URL);
	btnPrevious.classList.remove("show");
	btnPrevious.classList.add("hide");
	btnNext.classList.add("show");
});
