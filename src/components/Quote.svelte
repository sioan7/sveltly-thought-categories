<script>
    import Memory from './Memory.svelte';

    export let words;
    export let author;
</script>

<Memory>
    <blockquote> { words } </blockquote>
    <dd> { author } </dd>
</Memory>

<style>
    dd {
        text-align: right;
    }
</style>
