<script>
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import Button from "@/components/ui/button/button.svelte";

	let value = "";
</script>

<div id="toolbar" class="my-2 flex gap-2">
	<Button>Bold</Button>
	<Button>Italic</Button>
</div>

<Textarea bind:value></Textarea>

{@html value}