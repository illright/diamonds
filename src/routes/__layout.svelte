<script>
	import { goto } from '$app/navigation';
	import { initialAuth } from '$lib/features/auth';
	import '@fontsource/roboto-slab/700.css';
	import '@fontsource/roboto-slab/600.css';
	import '@fontsource/roboto-slab/400.css';
	import '@fontsource/roboto-slab/300.css';
	import '@fontsource/roboto-mono';
	import '../app.css';

	const loggedIn = initialAuth();
	if (!loggedIn) {
		goto('/');
	}
</script>

<slot />
