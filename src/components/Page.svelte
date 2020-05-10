<script>
    export let remembered;
</script>

<main>
    {#if remembered}
        <slot></slot>
    {/if}
</main>

<style>
    main {
        background: #777777;
        padding: 17px;
        box-sizing: border-box;
    }

    @media screen and (min-width: 0) {
        main {
            width: 100%;
        }
    }

    @media screen and (min-width: 700px) {
        main {
            width: 77%;
            margin: 17px auto;
            box-shadow: 0px 0px 27px 0px rgb(77, 77, 77);
            border-radius: 7px;
        }
    }
</style>
