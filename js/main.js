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

navList.addEventListener("click", function (event) {
	if (event.target.closest("a")) {
		//closest - перевіряє чи елемент на якому ми викликаємоу функцію closest відповідає заданому селектору("а") якщо відповідає то повертає елемент відразу, якщо ні то йде до батьківських поки не знайде( якщо не знайде то повертає нул)
		const target = event.target.closest("a");

		event.preventDefault();
		const elementId = target.getAttribute("href");
		const element = document.querySelector(elementId);
		const offsetTop = element.offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	}
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

window.addEventListener("scroll", function () {
	earth.style.transform = `translateY(-${scrollY / cof5}px)`;
	moonOne.style.transform = `translateY(-${scrollY / cof4}px)`;
	moonTwo.style.transform = `translateY(-${scrollY / cof3}px)`;
	moonThree.style.transform = `translateY(-${scrollY / cof2}px)`;
	moonFour.style.transform = `translateY(-${scrollY / cof1}px)`;
	sputnik.style.transform = `translate(-${scrollY / 30}px,${scrollY / cof6}px)`;
});

header.addEventListener("mousemove", function (event) {
	const parallaxWidth = header.offsetWidth;
	const parallaxHeight = header.offsetHeight;

	const coordX = event.pageX - parallaxWidth / 2;
	const coordY = event.pageY - parallaxHeight / 2;
	sputnik.style.transform = `translate(${coordX / 35}px,${coordY / 35}px)`;
});
//================================================================
