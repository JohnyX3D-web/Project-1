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
