const wrapper = document.querySelector(".wrapper");
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
