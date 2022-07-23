const accordionButtons = document.querySelectorAll(".accordion__btn");

accordionButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		const accordionContent = button.nextElementSibling;
		const activeAccordionButton = document.querySelector(
			".accordion__btn--active"
		);
		const openAccordionContent = document.querySelector(
			".accordion__content--open"
		);
		//debugger;
		if (activeAccordionButton && activeAccordionButton !== button) {
			activeAccordionButton.classList.remove("accordion__btn--active");
			openAccordionContent.classList.remove("accordion__content--open");
		}

		button.classList.toggle("accordion__btn--active");
		accordionContent.classList.toggle("accordion__content--open");
	});
});
