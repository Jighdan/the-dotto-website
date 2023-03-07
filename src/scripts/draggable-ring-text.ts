import interact from 'interactjs';
import { gsap } from 'gsap';

export const useDraggableRingText = () => {
	const selectors = {
		constraint: '.layout-container',
		ringText: '.ring-text'
	};

	const attributes = {
		positionX: 'data-position-x',
		positionY: 'data-position-y',
	}

	interact(selectors.ringText).draggable({
		modifiers: [
			interact.modifiers.restrictRect({
				restriction: selectors.constraint,
				endOnly: true
			})
		],
		onmove: (event) => {
			const { target } = event;

			const positions = {
				x: parseFloat(target.getAttribute(attributes.positionX)),
				y: parseFloat(target.getAttribute(attributes.positionY))
			};

			const calculatedPositions = {
				x: (positions.x || 0) + event.dx,
				y: (positions.y || 0) + event.dy
			}

			gsap.set(selectors.ringText, { translateY: calculatedPositions.y, translateX: calculatedPositions.x });
			target.setAttribute(attributes.positionX, calculatedPositions.x)
			target.setAttribute(attributes.positionY, calculatedPositions.y)
		},
		inertia: {
			resistance: 10,
			minSpeed: 100,
			endSpeed: 50
		}
	});
}