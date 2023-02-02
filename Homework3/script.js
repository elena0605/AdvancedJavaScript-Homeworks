// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

const URL =
	"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(URL)
	.then((response) => response.json())
	.then((data) => {
		const students = data.filter((person) => person.averageGrade > 3);
		console.log(students);

		const femaleStudents = data
			.filter(
				(person) => person.averageGrade === 5 && person.gender === "Female"
			)
			.map((person) => person.firstName);
		console.log(femaleStudents);

		const malesFullNames = data
			.filter(
				(person) =>
					person.city === "Skopje" &&
					person.age > 18 &&
					person.gender === "Male"
			)
			.map((person) => `${person.firstName} ${person.lastName}`);
		console.log(malesFullNames);

		const averageGradesFemale = data
			.filter((person) => person.gender === "Female" && person.age > 24)
			.map((person) => person.averageGrade);
		console.log(averageGradesFemale);

		const maleStudents = data.filter(
			(person) =>
				person.gender === "Male" &&
				person.averageGrade > 2 &&
				person.firstName[0] === "B"
		);
		console.log(maleStudents);
	});
