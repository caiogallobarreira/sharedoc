<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
  import * as ToggleGroup from "$lib/components/ui/toggle-group";
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Button from '../ui/button/button.svelte';
	import Icon from '@iconify/svelte';

	let element: any;
	let editor: any;

  let textContent: any = getContext("text");

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: $textContent,
			editorProps: {
				attributes: {
					class: 'prose max-w-none h-full m-4 p-5 bg-slate-50 focus:outline-none rounded',
				},
			},
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
        $textContent = editor.getHTML();
			},
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="flex gap-2 flex-col rounded border border-slate-300">
	<div id="toolbar" class="flex gap-2 sticky m-4 mb-0 shadow p-4 top-4 rounded z-30 bg-slate-100">
		{#if editor}
			<Button variant="outline" on:click={() => editor.chain().focus().toggleBold().run()}>
				<Icon icon="mdi-light:format-bold" />
			</Button>

			<Button variant="outline" on:click={() => editor.chain().focus().toggleItalic().run()}>
				<Icon icon="mdi-light:format-italic" />
			</Button>
		{/if}
	</div>

	<div id="editor" class="" bind:this={element} />
</div>