<script>
    import "../../app.css";
    import "$lib/style/root.css"
</script>

<section>
    <div class="max-w-[1200px] m-auto">
        <div class="pt-[70px] p-10">
            <h1 class="text-2xl flex items-center text-yellow-500"><i class="fa-solid fa-certificate mr-2 text-yellow-500"></i>CERTIFICATE</h1>
            <p>These are my certificate</p>
            <div class="list-cer">
                <div>
                    <img src="/public/Images/certificate/cer1-python.png" alt="">
                    <p>AITS Python Camp</p>
                </div>
                <div>
                    <img src="/public/Images/certificate/cer2-seacamp.png" alt="">
                    <p>Seacamp</p>
                </div>
                <div>
                    <img src="/public/Images/certificate/cer3-quantum.png" alt="">
                    <p>Quantum Computer</p>
                </div>
                <div>
                    <img src="/public/Images/certificate/cer4-nano.png" alt="">
                    <p>Nano Technology</p>
                </div>
            </div>
        </div>
        <div class="pt-[70px] p-10">
            <h1 class="text-2xl flex items-center text-yellow-500"><i class="fa-solid fa-diagram-project mr-2 text-yellow-500"></i>PROJECT</h1>
            <p>These are my project</p>
            <div class="list-project">
                <div class="w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa-brands fa-github text-2xl"></i>
                            <p class="text-[14px] ml-2 font-poppins_b">HourlyNotify</p>
                        </div>
                        <a href="https://github.com/PhubestSrikooon/HourlyNotify"><span class="material-symbols-outlined pl-2">open_in_new</span></a>
                    </div>
                    <p class="text-[14px] text-gray-300 mt-2">Reminder program that will notify you at the specified time.</p>
                </div>
                <div class="w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa-brands fa-github text-2xl"></i>
                            <p class="text-[14px] ml-2 font-poppins_b">SimpleCleaner</p>
                        </div>
                        <a href="https://github.com/PhubestSrikooon/SimpleCleaner"><span class="material-symbols-outlined pl-2">open_in_new</span></a>
                    </div>
                    <p class="text-[14px] text-gray-300 mt-2">A simple cleaner that i made for school project</p>
                </div>
                <div class="w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa-brands fa-github text-2xl"></i>
                            <p class="text-[14px] ml-2 font-poppins_b">RunSampleNative</p>
                        </div>
                        <a href="https://github.com/PhubestSrikooon/RunSampleNative"><span class="material-symbols-outlined pl-2">open_in_new</span></a>
                    </div>
                    <p class="text-[14px] text-gray-300 mt-2">Run Sample Native is a program designed for testing antivirus protection.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .list-cer{
        display:flex; 
        flex-direction: row; 
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .list-cer div{
        text-align: center;
        padding: 5px;
    }
    .list-cer div img{
        max-height: 200px;
    }

    .list-project{
        display:flex; 
        flex-direction: row; 
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>