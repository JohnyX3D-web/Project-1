const tariffsInner = document.querySelector(".tariffs__inner");
const tariffSelect = document.querySelector(".form__tariffs-select");

tariffsInner.addEventListener("click", function (event) {
	const targetElement = event.target.closest(".tariffs__item-btn");
	if (targetElement) {
		const element = document.querySelector("#contacts");
		const offsetTop = element.offsetTop;
		tariffSelect.value = targetElement.value;

		wrapper.scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	}
});
