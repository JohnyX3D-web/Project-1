const burgerBtn = document.querySelector(".header__burger-btn");
const navList = document.querySelector(".header__nav-list");
const linkNav = document.querySelectorAll(".header__nav-item a");

function closeMenuOnEscape(event) {
	console.log(event.code);
	if (event.code === "Escape") {
		closeMenu();
	}
}

burgerBtn.addEventListener("click", function () {
	if (burgerBtn.classList.contains("header__burger-btn--open")) {
		closeMenu();
	} else {
		openMenu();
	}
});

function openMenu() {
	document.addEventListener("keydown", closeMenuOnEscape);
	burgerBtn.classList.add("header__burger-btn--open");
	navList.classList.add("header__nav-list--active");
}

function closeMenu() {
	document.removeEventListener("keydown", closeMenuOnEscape);
	burgerBtn.classList.remove("header__burger-btn--open");
	navList.classList.remove("header__nav-list--active");
}

linkNav.forEach((link) => {
	link.addEventListener("click", function (event) {
		closeMenu();

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
