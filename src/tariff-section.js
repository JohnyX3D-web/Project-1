const tariffsInner = document.querySelector(".tariffs__inner");
const tariffSelect = document.querySelector(".form__tariffs-select");

tariffsInner.addEventListener("click", function (event) {
	const targetElement = event.target.closest(".tariffs__item-btn");
	if (targetElement) {
		tariffSelect.value = targetElement.value;
	}
});
