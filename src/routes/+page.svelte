<script>
    import "../app.css";
    import "$lib/style/root.css"
    import Aboutmenu from "$lib/element/aboutmenu.svelte";

    const learnmore_dropdown = [
        {
            name : 'Welcome',
            path : '#welcome',
            image : 'home'
        },
        {
            name : 'About',
            path : '#aboutme',
            image : 'inventory_2'
        },
        {
            name : 'Setting',
            path : '/404',
            image : 'settings'
        }
    ]
    var learnmore_expand = false

    function togglelearnmore(){
        learnmore_expand = !learnmore_expand
    }
</script>

<section class="h-screen overflow-hidden relative" id="welcome">
    <div class="main_title">
        <h1 class="font-poppins_b text-5xl">Everyting is possible</h1>
        <p class="font-poppins-r text-xl text-gray-300 mt-2">Welcome to my website</p>

        <button class="p-button1 flex overflow-hidden items-center relative" on:click={togglelearnmore}>
            {#if learnmore_expand}
                <div class="absolute bg-black top-[120%] text-left rounded-xl">
                    {#each learnmore_dropdown as ldrop}
                        <a href={ldrop.path} class="flex items-center p-4"><span class="material-symbols-outlined pr-2">{ldrop.image}</span>{ldrop.name}</a>
                    {/each}
                </div>
                <span class="material-symbols-outlined bg-transparent text-yellow-900">arrow_drop_up</span>
                {:else}
                <span class="material-symbols-outlined bg-transparent text-yellow-900">arrow_drop_down</span>
            {/if}
            Learn More
        </button>

    </div>
    <div class="side_title">
        <img src="public/Images/virusscope.PNG" alt="">
    </div>
    <div class="scroll_down">
        <span class="material-symbols-outlined animate-bounce w-6 h-6">arrow_downward</span>
        <p>Scroll down</p>
    </div>
</section>

<section id="aboutme" class="bg-black">
    <div class="aboutme p-4 flex relative max-w-[768px] m-auto" >
        <div class="me_image p-4 relative max-w-[40%] m-auto">
            <img class="rounded-2xl border-2 border-yellow-500" src="public/Images/me.jpg" alt="">
            <p class="absolute top-[20%] left-[55%] text-[1vw] bg-black p-3 rounded-[25px] flex items-center translate-x-[-100%] translate-y-[-20%]">
                This is me
                <span class="material-symbols-outlined pl-2 text-[2vw]">arrow_right</span>
            </p>
        </div>
        <div class="p-4">
            <h1 class="text-2xl font-poppins_r text-yellow-500">ABOUT ME</h1>
            <p>Hi my name is <b>Phubest Srikoon</b> my friends call me <b>Best</b>. I love to coding and do some computer stuff....</p>
            <p class="text-2xl font-poppins_r text-yellow-500 pt-4">CONTACT</p>
            <div class="space-x-4">
                <i class="fa-brands fa-github text-2xl"></i>
                <i class="fa-brands fa-twitter text-2xl"></i>
                <i class="fa-brands fa-facebook text-2xl"></i>
                <i class="fa-brands fa-discord text-2xl"></i>
            </div>
            <p><b>Email</b> : forbf100@gmail.com</p>
            <p><b>Phone</b> : (66+)64-215-9087</p>
        </div>
    </div>
    <!-- <hr class="max-w-[768px] m-auto"> -->
    <div class="max-w-[900px] m-auto p-8">
        <Aboutmenu/>
    </div>
</section>



<style>
    .main_title{
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
    }
    .side_title{
        z-index: -1;
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
    }
    .side_title:first-child{
        max-width: 50%;
    }
    .scroll_down{
        text-align: center;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        opacity: .7;
    }

    @media (max-width: 768px) {
        .main_title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
        }
        .main_title button{
            left: 50%;
            transform: translateX(-50%);
        }

        .side_title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
        }
        .side_title:first-child{
            max-width: 70%;
        }
        .aboutme{
            display: block;
        }
    }
</style>
