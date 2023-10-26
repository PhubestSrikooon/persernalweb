<script lang="ts">
	import { onMount } from "svelte";
    import { saveTheme,theme as tsh } from "$lib/themeManagement";
    import { t as tr } from "$lib/translation";

    let theme:String;
    let themes = ["light","dark","auto"]
    let localeThemes = ["common.setting.themes.light","common.setting.themes.dark","common.setting.themes.auto"]
    let theme_selector:HTMLSelectElement;
    onMount(()=>{
        theme = localStorage.getItem("theme") ?? "auto";
        themes.findIndex((t,i)=>{
            if(t == theme){
                theme_selector.selectedIndex = i;
                return true;
            }
        })
    })
</script>

<select class="select select-bordered w-full max-w-xs" bind:this={theme_selector} on:change={(e)=>{
    saveTheme(themes[e.target.selectedIndex]);
}}>
    {#each localeThemes as t}
        <option value={t}>{$tr(t)}</option>
    {/each}
</select>