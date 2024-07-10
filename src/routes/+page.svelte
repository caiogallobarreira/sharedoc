<script lang="ts">
	import Tiptap from '@/components/tiptap/Tiptap.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let text = writable("");
	setContext("text", text);
</script>

<Tiptap />