<script>
    import { onMount } from 'svelte';

    import Page from './Page.svelte';
    import Thought from './Thought.svelte';
    import Quote from './Quote.svelte';
    import Image from './Image.svelte';

    import { rememberChapter } from '../api/memory';

    export let name;

    let chapter = null;
    let remembered = false;

    onMount(async () => {
        chapter = await rememberChapter(name);
        remembered = true;
    });
</script>

<Page remembered={remembered}>
    <h1> { chapter.title } </h1>
    {#each chapter.memories as { type, ...memory }}
        {#if type === 'thought'}
            <Thought {...memory} />
        {:else if type === 'quote'}
            <Quote {...memory} />
        {:else if type === 'image'}
            <Image {...memory} />
        {/if}
    {/each}
</Page>
