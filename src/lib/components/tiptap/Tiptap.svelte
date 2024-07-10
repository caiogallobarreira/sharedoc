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

<div id="toolbar" class="my-2 flex gap-2">
  {#if editor}
    <Button variant="outline" on:click={() => editor.chain().focus().toggleBold().run()}>
      <Icon icon="mdi-light:format-bold" />
    </Button>

    <Button variant="outline" on:click={() => editor.chain().focus().toggleItalic().run()}>
      <Icon icon="mdi-light:format-italic" />
    </Button>
  {/if}
</div>

<div class="p-2 rounded border border-slate-300" bind:this={element} />