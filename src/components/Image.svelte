<script>
    import Memory from './Memory.svelte';

    export let source;
    export let explanation;
</script>

<Memory>
    <img src={source} alt={explanation} title={explanation}>
</Memory>

<style>
    img {
        display: block;
        margin: 1rem auto;

        max-width: 77%;
        max-height: 57vh;
    }
</style>
