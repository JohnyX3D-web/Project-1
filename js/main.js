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
//==============================================================
$(function () {
	$(".slick__wrapper")
		.on("init reInit afterChange", function (event, slick, currentSlide) {
			const i = (currentSlide ? currentSlide : 0) + 1;

			document.querySelector(".slick__number-change").textContent =
				i + " / " + slick.slideCount;
		})
		.slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			appendDots: "#slider-dots",
			prevArrow: ".slick__arrow-left",
			nextArrow: ".slick__arrow-right",
			responsive: [
				{
					breakpoint: 481,
					settings: {
						adaptiveHeight: true,
					},
				},
			],
		});
});

//==========================================================
const earth = document.querySelector(".header__img-earth");
const moonOne = document.querySelector(".header__img-moonone");
const moonTwo = document.querySelector(".header__img-moontwo");
const moonThree = document.querySelector(".header__img-moonthree");
const moonFour = document.querySelector(".header__img-moonfour");
const sputnik = document.querySelector(".header__img-sputnik");
const header = document.querySelector(".header");

const cof1 = 15;
const cof2 = 10;
const cof3 = 6;
const cof4 = 4;
const cof5 = 7;
const cof6 = 20;

wrapper.addEventListener("scroll", function (event) {
	// не працює

	earth.style.transform = `translateY(-${wrapper.scrollTop / cof5}px)`;
	moonOne.style.transform = `translateY(-${wrapper.scrollTop / cof4}px)`;
	moonTwo.style.transform = `translateY(-${wrapper.scrollTop / cof3}px)`;
	moonThree.style.transform = `translateY(-${wrapper.scrollTop / cof2}px)`;
	moonFour.style.transform = `translateY(-${wrapper.scrollTop / cof1}px)`;
	sputnik.style.transform = `translate(-${wrapper.scrollTop / 30}px,${
		wrapper.scrollTop / cof6
	}px)`;
});

header.addEventListener("mousemove", function (event) {
	const parallaxWidth = header.offsetWidth;
	const parallaxHeight = header.offsetHeight;

	const coordX = event.pageX - parallaxWidth / 2;
	const coordY = event.pageY - parallaxHeight / 2;
	sputnik.style.transform = `translate(${coordX / 35}px,${coordY / 35}px)`;
});
//================================================================
const counter = document.querySelector(".caunter");

function countAnimation() {
	let startTimestamp = null;
	const duration = 2000;
	const startValue = counter.textContent;
	const startPosition = 0;
	const step = function (timestamp) {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		counter.textContent = Math.floor(progress * (startPosition + startValue));

		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((enties, observer) => {
	enties.forEach((entry) => {
		if (entry.isIntersecting) {
			countAnimation();
			observer.unobserve(counter);
		}
	});
}, {});
counterObserver.observe(counter);

//====================================================================

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
//==============================================================================

const orderSteps = document.querySelectorAll(
	".order__steps-right, .order__steps-left"
);

const orderObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(
					"order__steps-right--show",
					"order__steps-left--show"
				);
			} else {
				entry.target.classList.remove(
					"order__steps-right--show",
					"order__steps-left--show"
				);
			}
		});
	},
	{
		root: wrapper,
		rootMargin: "-110px 0px -100px 0px",
	}
);

orderSteps.forEach(function (step) {
	orderObserver.observe(step);
});
//===============================================================lazy
const imgWho = document.querySelectorAll("img[data-src]");
let loadedImages = 0;

const whoObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			const img = entry.target;
			const imgSrc = img.dataset.src;

			if (entry.isIntersecting === true) {
				img.src = imgSrc;
				loadedImages++;
				observer.unobserve(img);
			}

			if (loadedImages === imgWho.length) {
				observer.disconnect();
			}
		});
	},
	{
		root: wrapper,
		rootMargin: "500px 0px 500px 0px",
	}
);
imgWho.forEach(function (step) {
	whoObserver.observe(step);
});
//==================================================================
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
//==========================================================
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
