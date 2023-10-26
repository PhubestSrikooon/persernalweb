<script>
    import {t,locales,locale,supportedLocales,saveLanguage} from "$lib/translation";
    import { enhance } from "$app/forms";
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
</script>
<p>{$t("common.home.title")}</p>
<p>{$t("common.home.subtitle",{name:"Best!"})}</p>
<a href="/settings" class="btn btn-accent">
    {$t("common.setting.title")}
</a>