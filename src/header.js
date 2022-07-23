const earth = document.querySelector(".header__img-earth");
const moonOne = document.querySelector(".header__img-moonone");
const moonTwo = document.querySelector(".header__img-moontwo");
const moonThree = document.querySelector(".header__img-moonthree");
const moonFour = document.querySelector(".header__img-moonfour");
const sputnik = document.querySelector(".header__img-sputnik");
const header = document.querySelector(".header");
const wrapper = document.querySelector(".wrapper");

const cof1 = 15;
const cof2 = 10;
const cof3 = 6;
const cof4 = 4;
const cof5 = 7;
const cof6 = 20;

wrapper.addEventListener("scroll", function (event) {
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
