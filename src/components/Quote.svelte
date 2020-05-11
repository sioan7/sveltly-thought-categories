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
    blockquote {
        font-size: 27px;
        margin-bottom: 0.5rem;
    }

    dd {
        text-align: right;

        font-size: 21px;
    }
</style>
