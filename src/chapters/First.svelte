<script>
    import Chapter from '../components/Chapter.svelte';
    import Opinion from '../components/Opinion.svelte';
    import Idea from '../components/Idea.svelte';
    import Quote from '../components/Quote.svelte';
    import Image from '../components/Image.svelte';

    import { t } from '../abilities/simplifiers.js';

    export let order = null;
</script>

<Chapter trigger={`c-${order}`} title="Representation" let:thoughts={t}>
    <Idea { ...t[0] } />
    <Opinion { ...t[1] } />
    <Idea { ...t[2] } />
    <Image { ...t[3] } />
    <Opinion { ...t[5] } />
</Chapter>
