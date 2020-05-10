<div>
    <slot/>
</div>

<style>
    div {
        all: unset;
        width: 100%;
    }

    div:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
