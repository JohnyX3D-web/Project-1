const counter = document.querySelector(".caunter");

function countAnimation() {
	let startTimestamp = null;
	const duration = 2000;
	const startValue = counter.textContent;
	const startPosition = 0;
	const step = function (timestamp) {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1); //Math.min - функція яка повертає мінімальне значення з передеаних аргументів
		counter.textContent = Math.floor(progress * (startPosition + startValue)); //Math.floor - округлює до цілих відкидаючи знаки після коми

		if (progress < 1) {
			window.requestAnimationFrame(step); //викликаємо функцію степ саму в собі (рекурсія)
		}
	};
	window.requestAnimationFrame(step); //функція яка дозволяє виконати код перед самим рендером кадру
}

const counterObserver = new IntersectionObserver((enties, observer) => {
	//IntersectionObserver слідкує за появлення на екрані блоку (елемента)
	enties.forEach((entry) => {
		if (entry.isIntersecting) {
			countAnimation(); //запускаєм наш каунтер коли дойшли до поля видимості
			observer.unobserve(counter); //вілкючаємо спостерігання після першого виконная анімації
		}
	});
}, {});
counterObserver.observe(counter);
