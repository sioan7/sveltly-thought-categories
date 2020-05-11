<script>
    import { onMount } from 'svelte';

    import Page from './Page.svelte';
    import Opinion from './Opinion.svelte';
    import Idea from './Idea.svelte';
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
    {#each chapter.thoughts as { type, ...memory }}
        {#if type === 'opinion'}
            <Opinion {...memory} />
        {:else if type === 'idea'}
            <Idea {...memory} />
        {:else if type === 'quote'}
            <Quote {...memory} />
        {:else if type === 'image'}
            <Image {...memory} />
        {/if}
    {/each}
</Page>

<style>
    h1 {
        font-size: 37px;
    }
</style>
