import { useDraggableRingText } from "./draggable-ring-text";
import { doesBrowserPrefersReducedMotion } from './prefers-reduced-motion';
import { useEntryAnimations } from "./entry-animations";

const doesPreferReducedMotion = doesBrowserPrefersReducedMotion();

if (!doesPreferReducedMotion) {
	window.addEventListener('DOMContentLoaded', () => {
		useEntryAnimations();
		useDraggableRingText();
	})
}

