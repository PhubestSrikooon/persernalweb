<script>
    import {t,locales,locale,supportedLocales,saveLanguage} from "$lib/translation";
</script>
<select name="language" class="select select-bordered w-full max-w-xs" on:change={(e)=>{
    let lang = e.target.value;
    $locale = lang;
    saveLanguage(lang);
}}>
    {#each $locales as lang}
        {#if $locale == lang}
            <option value={lang} selected>{supportedLocales[lang]}</option>
        {:else}
            <option value={lang}>{supportedLocales[lang]}</option>
        {/if}
    {/each}
</select>