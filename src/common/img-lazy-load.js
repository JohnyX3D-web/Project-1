const wrapper = document.querySelector(".wrapper");
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
