<script>
    import Header from "$lib/element/Header.svelte";
    import Footer from "$lib/element/Footer.svelte";
</script>

<Header/>

<main>
    <slot/>
</main>
<Footer/>