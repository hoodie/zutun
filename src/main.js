import { Store } from "svelte/store";

import App from './App.html';

const store =  new Store({
		items: [
			{ name: "Milch", category: "shopping", done: false },
			{ name: "Milch", category: "shopping", done: true},
			{ name: "Milch", category: "shopping", done: true},
			{ name: "Milch", category: "shopping", done: true},
			{ name: "Milch", category: "shopping", done: false },
		],
		catalogue: {
			items: [
				{ name: "Milch",    category: "shopping", price: .85 },
				{ name: "Butter",   category: "shopping", price: 2.29},
				{ name: "Mehl",     category: "shopping" },
				{ name: "Bier",     category: "shopping" },
				{ name: "Saugen",   category: "wohnung"  },
				{ name: "Hingehen", category: "arbeit"   },
			]
		},
		showCatalogue: false,
	});

store.on('state', ({current}) => {
	console.dir({storeState: current})
});

store.compute('categories', ['items'],
	(items) => Array.from(new Set(items.map(({category}) => category)))
);

store.compute('sumByCategory', ['items'],
	(items) => {
		const sums = {};
		items.forEach(item => {
			sums[item.category] = sums[item.category] || 0
			if (item.price) {
				sums[item.category] += item.price;
			}
		});
		return sums;
	}
);

store.compute('progress', ['items'],
	(items) => {
		const progresses = {};
		items.forEach(item => {
			progresses[item.category] = progresses[item.category] || {open: 0, done: 0, all: 0};
			if (item.done) {
				progresses[item.category].done += 1;
			} else {
				progresses[item.category].open += 1;
			}
			progresses[item.category].all+= 1;
		});
		return progresses;
	}
);

const app = new App({
	target: document.body,
	store
});

window.app = app;

export default app;
