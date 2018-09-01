import { Store } from "svelte/store";

import App from './App.html';

const store =  new Store({
		items: [
			//{ name: "Milch", category: "shopping", price: .96, done: false },
		],
		catalogue: {
			items: [
				{ name: "Milch",    category: "shopping", price: .85 },
				{ name: "Butter",   category: "shopping", price: 2.29},
				{ name: "Mehl",     category: "shopping", price: .6 },
				{ name: "Bier",     category: "shopping", price: 20 },

				{ name: "TÜV",   category: "AUTO"},
				{ name: "Waschen",   category: "AUTO"},

				{ name: "Saugen",   category: "wohnung"},
				{ name: "Küche",    category: "wohnung"},
				{ name: "Bad",      category: "wohnung"},
			]
		},
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
