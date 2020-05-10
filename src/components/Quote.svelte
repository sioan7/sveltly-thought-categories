<script>
    import Thought from './Thought.svelte';

    export let words;
    export let author;
</script>

<Thought>
    <blockquote> { words } </blockquote>
    <dd> { author } </dd>
</Thought>

<style>
    blockquote {
        font-size: 27px;
        margin-bottom: 0.5rem;
    }

    dd {
        text-align: right;

        font-size: 21px;
    }
</style>
