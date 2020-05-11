<script>
    import Thought from './Thought.svelte';

    export let words;
</script>

<Thought>
    <p> { words } </p>
</Thought>

<style>
    p {
        font-size: 17px;
    }
</style>