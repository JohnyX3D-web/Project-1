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
