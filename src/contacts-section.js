const form = document.querySelector(".form");
const loader = document.querySelector(".request__loader");
const thanksText = document.querySelector(".request__thanks-text");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	loader.classList.add("request__loader--open");
	form.classList.add("form--hide");
	setTimeout(function () {
		//виконує код з затримкою після заданої кількості мілі секунд. setTimeout не блокує виконання коду далі який йде нижче
		loader.classList.remove("request__loader--open");
		thanksText.classList.add("request__thanks-text--open");
	}, 3000);
});

const localStorageKay = "contactForm"; //ключ по якому  шукаємо і записуєм в localStorage наші дані
const draftValues = localStorage.getItem(localStorageKay); //getItem дає можливість витягнути наші дані з localStorage в стрінгу(повертає дані або null)
const values = draftValues === null ? {} : JSON.parse(draftValues); //JSON формат передачі/зберігання даних. JSON.parse відновлює(декодує/парсить) дані записані в localStorage або ініціалізує зміну пустим обєктом

form.addEventListener("input", function (event) {
	const input = event.target;
	const name = input.name;
	const value = input.value;

	values[name] = value; //більш гнучкіший спосіб створення обєкту замість (.) використовуємо ([]) і в них можемо передавати зміну з назвою полля обєкту. В даному випадку по назві інпута ми присвоюємо значення інпута

	const stringValues = JSON.stringify(values); //перетворюємо обєкт в стрінг(JSON формату) бо localStorage зберігає тільки стрінгові дані
	localStorage.setItem(localStorageKay, stringValues); //записуємо отримані значееня по даному ключу
});

form.addEventListener("reset", function () {
	localStorage.removeItem(localStorageKay); //видаляємо всі дані з форми і localStorage
});

//перевіряємо чи були записані дані з попередьої сесії , якщо так то ми їх декодуємо і відновлюємо значення в полях форми виконується 1 раз при першій загрузці сайту
if (draftValues !== null) {
	const formValues = JSON.parse(draftValues);

	for (const nameInput in formValues) {
		//проходить по значеннях обєкту і записує в "nameInput" назву інпуту
		const input = form.querySelector(`[name="${nameInput}"]`); // шукаємо поля в формі по "name" атирибуту
		input.value = formValues[nameInput]; //достаємо значення поля по назві інпута з обєкту і присвоюємо реальному інпутут на сторінці в формі
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
