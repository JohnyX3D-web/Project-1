const burgerBtn = document.querySelector(".header__burger-btn");
const navList = document.querySelector(".header__nav-list");
const linkNav = document.querySelectorAll(".header__nav-item a");

burgerBtn.addEventListener("click", function () {
	burgerBtn.classList.toggle("header__burger-btn--open");
	navList.classList.toggle("header__nav-list--active");
});

linkNav.forEach((link) => {
	link.addEventListener("click", function (event) {
		burgerBtn.classList.remove("header__burger-btn--open");
		navList.classList.remove("header__nav-list--active");

		event.preventDefault();
		const elementId = event.target.getAttribute("href");
		const element = document.querySelector(elementId);
		const offsetTop = element.offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	});
});
