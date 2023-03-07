import { gsap } from 'gsap';

export const useEntryAnimations = () => {
	const selectors = {
		logoArrow: '#logo > line',
		layoutHeaderTitle: '.layout-header > h3',
		sectionHero: '.section-hero > *',
		sectionContact: '.section-contact > *:not(div)',
		sectionContactCta: '.section-contact > div',
		layoutFooter: '.layout-footer > div',
		layoutFooterFigure: '.layout-footer > figure',
	}

	const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: 'power2.out' } });

	return timeline
		.fromTo(selectors.logoArrow, { translateX: -100, }, { translateX: 0 })
		.fromTo(selectors.layoutHeaderTitle, { opacity: 0 }, { opacity: 1 })
		.fromTo(selectors.sectionHero, { opacity: 0, translateX: -100 }, { opacity: 1, translateX: 0, stagger: 0.5 })
		.fromTo(selectors.sectionContact, { opacity: 0, translateX: -100 }, { opacity: 1, translateX: 0, stagger: 0.5 })
		.fromTo(selectors.sectionContactCta, { opacity: 0, translateY: 100 }, { opacity: 1, translateY: 0 })
		.fromTo(selectors.layoutFooter, { opacity: 0 }, { opacity: 1 })
		.fromTo(selectors.layoutFooterFigure, { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' })
}