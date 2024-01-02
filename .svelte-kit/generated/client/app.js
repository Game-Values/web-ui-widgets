export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const server_loads = [];

export const dictionary = {
		"/[locale]/(app)": [~3,[2]],
		"/[locale]/(app)/ai": [4,[2]],
		"/[locale]/(app)/blog": [5,[2]],
		"/[locale]/(app)/promotions": [6,[2]],
		"/[locale]/(app)/top": [7,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';