<script lang="ts">
	import Tiptap from '@/components/tiptap/Tiptap.svelte';
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';

  export let data;

  let { supabase, document } = data;
	$: ({ supabase, document } = data);

	let text = writable(document.data);

	setContext("text", text);

  const handleUpdate = async (payload: any) => {
    document = await payload.new;
    $text = document.data;
  }

  const textUpdate = async () => {
    await supabase
      .from('documents')
      .update({data: $text, updated_at: new Date() })
      .eq("path", "/")
  }

  supabase
    .channel("documents")
    .on('postgres_changes', { event: '*', schema: 'public', table: 'documents' }, handleUpdate)
    .subscribe()
</script>

{$text}

{#await document}
  <Skeleton class="h-36 w-full" />
{:then}
  <h1 class="flex gap-2 items-center text-2xl py-6 text-slate-950 font-bold select-none"><Icon icon="material-symbols-light:edit-document-outline" font-size="48" /> {document.name}</h1>
  <Tiptap on:textUpdate={textUpdate}/>
{/await}