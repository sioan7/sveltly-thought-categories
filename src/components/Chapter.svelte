<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import Page from './Page.svelte';
    import Opinion from './Opinion.svelte';
    import Idea from './Idea.svelte';
    import Quote from './Quote.svelte';
    import Image from './Image.svelte';

    import { rememberChapter } from '../api/memory';

    export let trigger = null;
    export let title = null;

    const cleanThoughts = (thoughts) => thoughts.filter(x => x.type).map(x => delete x.type && x);
</script>

<Page>
    <h1> { title } </h1>
    {#if trigger}
        {#await rememberChapter(trigger)}
            <h2> Remembering chapter... </h2>
        {:then thoughts}
            <slot thoughts={ cleanThoughts(thoughts) }/>
        {:catch error}
            <h2> Failed to remember chapter 😞 because { error.message } </h2>
        {/await}
    {:else}
        <slot />
    {/if}
</Page>

<style>
    h1 {
        font-size: 37px;
    }
</style>
