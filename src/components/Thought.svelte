<div>
    <slot/>
</div>

<style>
    div {
        all: unset;
        width: 100%;
    }

    div :global(p) {
        text-align: justify;
    }
</style>
