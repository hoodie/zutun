import { Store } from "svelte/store";

import App from './App.html';

const app = new App({

	target: document.body,

	store: new Store({
	})
});

window.app = app;

export default app;
