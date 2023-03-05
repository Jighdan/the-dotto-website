import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
	const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: 'power2.out' } });

	timeline
		.fromTo('#logo > line', { translateX: -100, }, { translateX: 0 })
		.fromTo('.layout-header > h3', { opacity: 0 }, { opacity: 1 })
});
