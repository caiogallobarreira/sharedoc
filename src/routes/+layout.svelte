<script>
	import '../app.css';
</script>

<div class="h-screen flex flex-col">
	<header class="p-6 bg-slate-300">
		<h1 class="text-center text-3xl font-bold">Sharedoc</h1>
		<p class="text-center text-gray-600">Experimento criado usando Sveltekit e Supabase</p>
	</header>

	<main class="p-6 flex-1">
		<slot></slot>
	</main>
</div>
