<script lang="ts">
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import { t } from "$lib/translation";
    import { page } from "$app/stores";
	import { goto } from "$app/navigation";
</script>
<a href={$page.url.searchParams.get("redirect") ?? "/"} class="btn btn-primary">{$t("common.setting.back")}</a>
<LanguageSwitcher />
<ThemeSwitcher />