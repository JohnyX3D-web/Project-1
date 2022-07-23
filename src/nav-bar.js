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
//========================================================
navList.addEventListener("click", function (event) {
	if (event.target.closest("a")) {
		//closest - перевіряє чи елемент на якому ми викликаємоу функцію closest відповідає заданому селектору("а") якщо відповідає то повертає елемент відразу, якщо ні то йде до батьківських поки не знайде( якщо не знайде то повертає нул)
		const target = event.target.closest("a");
		const wrapper = document.querySelector(".wrapper");

		event.preventDefault();
		const elementId = target.getAttribute("href");
		const element = document.querySelector(elementId);
		const offsetTop = element.offsetTop;

		wrapper.scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	}
});

//===============================================
const headerSection = document.querySelector(".header");
const headerMenu = headerSection.querySelector(".header__menu");
const headerMenuRect = headerMenu.getBoundingClientRect();

const headerObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting === false) {
				headerMenu.classList.add("header__menu--stick");
				headerSection.style.paddingTop = headerMenuRect.height + "px";
			} else {
				headerMenu.classList.remove("header__menu--stick");
				headerSection.style.paddingTop = "";
			}
		});
	},
	{
		rootMargin: "-5px 0px 0px 0px",
	}
);
headerObserver.observe(headerSection);
//===================================================
const pageSections = document.querySelectorAll(".page__section");
let isInitLoad = true;
const wrapper = document.querySelector(".wrapper");

const sectionsObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach(function (entry) {
			const selector = `.header__nav-link[href="#${entry.target.id}"]`;
			const link = document.querySelector(selector);
			link.classList.toggle(
				"header__nav-link--active",
				entry.isIntersecting === true
			);
		});
	},
	{
		root: wrapper,
		rootMargin: "0px 0px -100% 0px",
	}
);

pageSections.forEach(function (section) {
	sectionsObserver.observe(section);
});
