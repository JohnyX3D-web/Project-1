const form = document.querySelector(".form");
const loader = document.querySelector(".request__loader");
const thanksText = document.querySelector(".request__thanks-text");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	loader.classList.add("request__loader--open");
	form.classList.add("form--hide");
	setTimeout(function () {
		loader.classList.remove("request__loader--open");
		thanksText.classList.add("request__thanks-text--open");
	}, 3000);
});

const localStorageKay = "contactForm";
const draftValues = localStorage.getItem(localStorageKay);
const values = draftValues === null ? {} : JSON.parse(draftValues);

form.addEventListener("input", function (event) {
	const input = event.target;
	const name = input.name;
	const value = input.value;

	values[name] = value;

	const stringValues = JSON.stringify(values);
	localStorage.setItem(localStorageKay, stringValues);
});

form.addEventListener("reset", function () {
	localStorage.removeItem(localStorageKay);
});

if (draftValues !== null) {
	const formValues = JSON.parse(draftValues);

	for (const nameInput in formValues) {
		const input = form.querySelector(`[name="${nameInput}"]`);
		input.value = formValues[nameInput];
	}
}

const addressForm = form.querySelector('[name="adres"]');
let addressPlaceholder = addressForm.placeholder;

addressForm.addEventListener("focus", function (event) {
	event.target.placeholder = "";
});
addressForm.addEventListener("blur", function (event) {
	event.target.placeholder = addressPlaceholder;
});

const questionForm = document.querySelector('[name="question"]');
const formLable = document.querySelector(".form__lable");

questionForm.addEventListener("focus", function (event) {
	formLable.classList.toggle("form__lable--focus");
});
questionForm.addEventListener("blur", function (event) {
	formLable.classList.toggle("form__lable--focus");
});
