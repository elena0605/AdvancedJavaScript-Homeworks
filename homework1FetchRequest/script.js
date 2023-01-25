// make the people selectable from drop down menu where names will be shown, and when a
// person is selected, the h1 and table
// will be updated

const selectNames = document.getElementById("drop-down");
const result = document.getElementById("result");

const printName = function (resultElement, name) {
	const resultTitle = resultElement.getElementsByTagName("h1")[0];
	resultTitle.innerText = name;
};
const printStats = function (resultElement, people, value) {
	const resultTable = resultElement.getElementsByTagName("tbody")[0];
	resultTable.innerHTML = "";

	for (const person of people) {
		if (person.name === value) {
			resultTable.innerHTML += `
            <tr>
                <td> Height </td>
                <td> ${person.height}cm </td>
            </tr>
            <tr>
                <td> Weight </td>
                <td> ${person.mass}kg </td>
            </tr>
            <tr>
                <td> Eye Color </td>
                <td> ${person.eye_color} </td>
            </tr>
            <tr>
                <td> Hair Color </td>
                <td> ${person.hair_color} </td>
            </tr>`;
		}
	}
};
const printSelectedNames = function (people) {
	for (const person of people) {
		selectNames.innerHTML += `<option value =${person.name}>${person.name}</option>`;
	}
};

fetch("https://swapi.dev/api/people/")
	.then(function (response) {
		return response.json();
	})
	.then(function (parsedData) {
		printSelectedNames(parsedData.results);
		selectNames.addEventListener("change", function handleChange() {
			const optionText = selectNames.options[selectNames.selectedIndex].text;
			printName(result, optionText);
			printStats(result, parsedData.results, optionText);
		});
	})
	.catch(function (err) {
		console.log("Error:", err);
	});
