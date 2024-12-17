import { defineConfig } from "@solidjs/start/config";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	ssr: false,
	vite: {
		plugins: [
			tailwindcss() // Breaking when restarting dev server. It requires deletion of /node_modules/.vinxi or changes made to ./src/app.css 
		],
	}
});
