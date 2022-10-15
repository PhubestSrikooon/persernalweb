<script>
    import "../app.css";
    import "$lib/style/root.css"
    import { page } from '$app/stores';
</script>


<section class="h-screen overflow-hidden relative">
    <div class="main_title">
        <h1 class="font-poppins_b text-5xl">{$page.status}</h1>
        <p class="font-poppins-r text-xl text-gray-300 mt-2">{$page.error?.message}</p>
        <button class="p-button1 flex overflow-hidden items-center">
            <span class="material-symbols-outlined bg-transparent text-yellow-900">arrow_left</span>
            Back
        </button>
    </div>
    <div class="side_title">
        <span class="material-symbols-outlined">error</span>
    </div>
    <div class="scroll_down">
        <span class="material-symbols-outlined ">arrow_left</span>
        <p>Go back to home</p>
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
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
    }
    .side_title span{
        font-size: 10vw;
    }
    .scroll_down{
        text-align: center;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        opacity: .7;
    }
</style>