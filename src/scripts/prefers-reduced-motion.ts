export const doesBrowserPrefersReducedMotion = () => {
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	return !prefersReducedMotion || prefersReducedMotion.matches;
};
