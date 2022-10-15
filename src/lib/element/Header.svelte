<script>
    import "../../app.css";
    import "$lib/style/root.css"
    import { page } from '$app/stores';

    const navlist = [
        {
            name : 'Home',
            path : '/',
            image : 'home'
        },
        {
            name : 'Collection',
            path : '/collection',
            image : 'inventory_2'
        },
        {
            name : 'Setting',
            path : '/404',
            image : 'settings'
        }
    ]

    var currentLang = "TH"
    var menustate = false

    function showMenu(){
        menustate = !menustate
    }

</script>


<nav class="fixed z-50 w-[100%]">
    <div class="flex justify-between p-4 items-center">
        <div>
            <a href="/">Logo</a>
        </div>
        <div class="hidden md:flex space-x-4 items-center">
            <button class="s-round-button1">{currentLang}</button>
            <li class="flex items-center">
                <span class="material-symbols-outlined p-2">search</span>
                <input class="p-2 bg-transparent" type="text" placeholder="Search ...">
            </li>
            {#each navlist as list}
                <li class:active={$page.url.pathname === list.path} class="s-round-button1">
                    <a href={list.path} class="flex items-center">
                        <span class="material-symbols-outlined p-[5px]">{list.image}</span>
                        {list.name}
                    </a>
                </li>
            {/each}
        </div>

        <div class="md:hidden relative">
            <input type="checkbox" checked={menustate} on:click={showMenu} class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-6 h-6 opacity-0">
            {#if menustate}
                <span class="material-symbols-outlined p-2 bg-black rounded-3xl">close</span>
                <div class="md:hidden md:block space-y-8 items-center absolute right-[0] bg-black p-6 rounded-3xl drop-shadow-md pt-4 max-h-[70vh] overflow-y-scroll">
                    <button class="s-round-button1">{currentLang}</button>
                    <li class="flex items-center">
                        <span class="material-symbols-outlined p-2">search</span>
                        <input class="p-2 bg-transparent" type="text" placeholder="Search ...">
                    </li>
                    {#each navlist as list}
                        <li class:active={$page.url.pathname === list.path} class="s-round-button1">
                            <a href={list.path} on:click={showMenu} class="flex items-center">
                                <span class="material-symbols-outlined p-[5px]">{list.image}</span>
                                {list.name}
                            </a>
                        </li>
                    {/each}
                </div>
            {:else}
                <span class="material-symbols-outlined p-2">menu</span>
            {/if}
        </div>
    </div>
</nav>

<style>
    nav{
        background: linear-gradient(180deg , var(--yellow-800),transparent);
    }
    li{
        list-style: none;
    }
</style>