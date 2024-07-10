<script>
	import '../app.css';

	export let data;

	let { supabase } = data
	$: ({ supabase } = data)
</script>

<svelte:head>
	<title>Sharedoc</title>
</svelte:head>

<div class="h-screen flex flex-col">
	<header class="p-6 bg-slate-300 select-none">
		<h1 class="text-center text-3xl font-bold">Sharedoc</h1>
		<p class="text-center text-gray-600">Experimento criado usando Sveltekit, Supabase, Bun, Shadcn, Tailwind e outras tecnologias.</p>
	</header>

	<main class="px-6 flex-1">
		<slot></slot>
	</main>
</div>
