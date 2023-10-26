<script lang="ts">
	import '../app.scss';
	import "@fontsource-variable/anuphan";
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import { loadTheme } from '$lib/themeManagement';
	import { t, locales, locale, supportedLocales,loadTranslations,saveLanguage } from "$lib/translation";
	onMount( async () => {
		let initLang = $page.url.searchParams.get("lang") ?? localStorage.getItem("lang") ?? "th";
		loadTranslations(initLang);
		saveLanguage(initLang);
		loadTheme();
	});
</script>

<slot />
