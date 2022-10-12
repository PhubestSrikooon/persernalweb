<script>
    import "../../app.css";
    import "$lib/style/root.css"
    import { page } from '$app/stores';
</script>

<nav>
    <div class="flex justify-between p-4 items-center">
        <div>
            <a href="/">Logo</a>
        </div>
        <div class="hidden md:flex space-x-4 items-center">
            <li class="flex items-center">
                <span class="material-symbols-outlined p-2">search</span>
                <input class="p-2" type="text" placeholder="Search ...">
            </li>
            <li class:active={$page.url.pathname === "/"}>
                <a href="/">
                    <span class="material-symbols-outlined">home</span>
                    Home
                </a>
            </li>
            <li class:active={$page.url.pathname === "/about"}>
                <a href="/about">About</a>
            </li>
        </div>
        <div class="md:hidden ">
            <span class="material-symbols-outlined p-2">menu</span>
        </div>
    </div>
</nav>

<style>
    li{
        list-style: none;
    }
    li a{
        display: flex;
        align-items: center;
    }
</style>