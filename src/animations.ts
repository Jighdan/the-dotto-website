import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
	const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: 'power2.out' } });

	timeline
		.fromTo('#logo > line', { translateX: -100, }, { translateX: 0 })
		.fromTo('.layout-header > h3', { opacity: 0 }, { opacity: 1 })
		.fromTo('.section-hero > *', { opacity: 0, translateX: -100 }, { opacity: 1, translateX: 0, stagger: 0.5 })
		.fromTo('.section-contact > *:not(div)', { opacity: 0, translateX: -100 }, { opacity: 1, translateX: 0, stagger: 0.5 })
		.fromTo('.section-contact > div', { opacity: 0, translateY: 100 }, { opacity: 1, translateY: 0 })
		.fromTo('.layout-footer > div', { opacity: 0}, { opacity: 1 })
		.fromTo('.layout-footer > figure', { opacity: 0 }, { opacity: 1 })
});
