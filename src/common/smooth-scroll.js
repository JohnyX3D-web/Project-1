function scrollToSection(target) {
	const wrapper = document.querySelector(".wrapper");
	//debugger;
	const elementId = target.getAttribute("href")
		? target.getAttribute("href")
		: target.dataset.scrollTo;

	const element = document.querySelector(elementId);
	const offsetTop = element.offsetTop;

	wrapper.scroll({
		top: offsetTop,
		behavior: "smooth",
	});
}

document.addEventListener("click", function (event) {
	const anchorLink = event.target.closest(
		'a[href^="#"], button[data-scroll-to]'
	);
	//closest - перевіряє чи елемент на якому ми викликаємо функцію closest відповідає заданому селектору("а") якщо відповідає то повертає елемент відразу, якщо ні то йде до батьківських поки не знайде( якщо не знайде то повертає нул)
	if (anchorLink !== null) {
		event.preventDefault();
		scrollToSection(anchorLink);
	}
});
