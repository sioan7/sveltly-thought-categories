<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import Page from './Page.svelte';
    import Opinion from './Opinion.svelte';
    import Idea from './Idea.svelte';
    import Quote from './Quote.svelte';
    import Image from './Image.svelte';

    import { rememberChapter } from '../api/memory';

    export let name;

    const dispatch = createEventDispatcher();
    const chapterPromise = rememberChapter(name).then((chapter) => {
        dispatch('remember', chapter);
        return chapter;
    });
    
</script>

{#await chapterPromise}
    <h2>Loading chapter...</h2>
{:then chapter}
    <Page>
        <h1> { chapter.title } </h1>
        {#each chapter.thoughts as { type, ...memory }}
            {#if type === 'opinion'}
                <Opinion { ...memory } />
            {:else if type === 'idea'}
                <Idea { ...memory } />
            {:else if type === 'quote'}
                <Quote { ...memory } />
            {:else if type === 'image'}
                <Image { ...memory } />
            {/if}
        {/each}
        <slot />
    </Page>
{:catch error}
    <h2>Failed to remember chapter 😞</h2>
{/await}

<style>
    h1 {
        font-size: 37px;
    }
</style>
