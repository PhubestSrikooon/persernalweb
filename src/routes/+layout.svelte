<script>
    import Header from "$lib/element/Header.svelte";
    import Footer from "$lib/element/Footer.svelte";
    export const prerender = true;
</script>

<Header/>

<main>
    <slot/>
</main>
<Footer/>