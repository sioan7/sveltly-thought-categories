<script>
    import { onMount } from 'svelte';

    import Chapter from '../components/Chapter.svelte';
    import Opinion from '../components/Opinion.svelte';
    import Idea from '../components/Idea.svelte';
    import Quote from '../components/Quote.svelte';
    import Image from '../components/Image.svelte';

    let chapter = null;

    
</script>

<Chapter name="chapter-1" on:remember={(e) => chapter = e.detail}>
    <!-- <Quote words={'something'} author={'someone'}></Quote> -->
</Chapter>
