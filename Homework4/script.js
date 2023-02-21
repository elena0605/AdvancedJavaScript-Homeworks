const loginButton = document.querySelector(".login");
const avatarImage = document.querySelector(".avatar-image");
const page = document.body.id;
const storage = localStorage.getItem("userState");
let userIsLogged = storage ? storage : false;

const setData = function (key, data) {
	let dataToSave = typeof data == "object" ? JSON.stringify(data) : data;
	sessionStorage.setItem(key, dataToSave);
};

const getData = function (key) {
	let dataToReturn;
	dataToReturn = sessionStorage.getItem(key);
	try {
		dataToReturn = JSON.parse(dataToReturn);
	} catch (e) {
		dataToReturn = dataToReturn;
	}
	return dataToReturn;
};

const getDataFromURLorLocal = function (url) {
	return new Promise((resolve, reject) => {
		//ovdeka ke go zeme podatokot od sessionStorage
		const localData = getData(url);
		//dokolku ne postoi podatok na session storage so toj kluc, da proba da go zeme
		// od internet da napravi AJAX povik
		if (!localData) {
			fetch(url)
				.then((data) => data.json())
				.then((data) => {
					setData(url, data);
					resolve(data);
				});
		} else {
			console.log("od lokal se zima");
			resolve(localData);
		}
	});
};

window.addEventListener("load", () => {
	switch (page) {
		case "electronics":
			getDataFromURLorLocal(
				"https://fakestoreapi.com/products/category/electronics"
			).then((json) => productCard(json));

			break;
		case "jewelery":
			getDataFromURLorLocal(
				"https://fakestoreapi.com/products/category/jewelery"
			).then((json) => productCard(json));

			break;
		case "mens":
			getDataFromURLorLocal(
				"https://fakestoreapi.com/products/category/men's clothing"
			).then((json) => productCard(json));

			break;
		case "womens":
			getDataFromURLorLocal(
				"https://fakestoreapi.com/products/category/women's clothing"
			).then((json) => productCard(json));

			break;
	}
	if (storage) {
		loginButton.classList.remove("show");
		loginButton.classList.add("hide");
		avatarImage.classList.remove("hide");
		avatarImage.classList.add("show");
	} else {
		avatarImage.classList.remove("show");
		avatarImage.classList.add("hide");
		loginButton.classList.remove("hide");
		loginButton.classList.add("show");
	}
	loginButton.addEventListener("click", function () {
		userIsLogged = true;
		loginButton.classList.remove("show");
		loginButton.classList.add("hide");
		avatarImage.classList.remove("hide");
		avatarImage.classList.add("show");
		localStorage.setItem("userState", userIsLogged);
	});
	avatarImage.addEventListener("click", function () {
		userIsLogged = false;
		avatarImage.classList.remove("show");
		avatarImage.classList.add("hide");
		loginButton.classList.remove("hide");
		loginButton.classList.add("show");
		localStorage.removeItem("userState");
	});
	function productCard(categories) {
		const cardWrapper = document.querySelector(".card-wrapper");
		for (const category of categories) {
			cardWrapper.innerHTML += `
		 <div class="single-card-container" id="${category.id}">
			<div class="card-image-wrapper"> 
			  <img class='card-image'src = "${category.image}"alt="product-image">
			</div>
			<div class = "card-body">
			  <h1 class="card-title">${category.title} </h1>
			  <p class="card-description">${category.description}</p>
			  <p class="card-price">${category.price}$</p>
			  <button class="card-button"> <img
			  src="../Homework4/assets/images/icon-cart.svg"
			  alt="cart-img"
			  class="cart-image"
			  /> Add to cart </button>
			</div>
		 </div>
			`;
		}
		const cardButtons = document.getElementsByClassName("card-button");
		for (let i = 0; i < cardButtons.length; i++) {
			cardButtons[i].addEventListener("click", () => {
				if (userIsLogged) {
					alert("You added Item to your Cart ");
				} else {
					alert("First you must Log In to add items to your cart ");
				}
			});
		}
	}
});
