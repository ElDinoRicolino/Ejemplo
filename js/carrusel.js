document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelector('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 300,
		dist: -80,
		shift: 5,
		padding: 5,
		numVisible: 3,
		indicators: true
	});
});