<script>
    import Thought from './Thought.svelte';

    export let source;
    export let explanation;
</script>

<Thought>
    <img src={source} alt={explanation} title={explanation}>
</Thought>

<style>
    img {
        display: block;
        margin: auto;

        max-width: 77%;
        max-height: 57vh;
    }
</style>
