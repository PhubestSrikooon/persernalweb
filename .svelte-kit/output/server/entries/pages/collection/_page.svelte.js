import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                    */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".list-cer.svelte-owgv9i.svelte-owgv9i{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.list-cer.svelte-owgv9i div.svelte-owgv9i{text-align:center;padding:5px}.list-cer.svelte-owgv9i div img.svelte-owgv9i{max-height:200px}.list-project.svelte-owgv9i.svelte-owgv9i{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="${"max-w-[1200px] m-auto"}"><div class="${"pt-[70px] p-10"}"><h1 class="${"text-2xl flex items-center text-yellow-500"}"><i class="${"fa-solid fa-certificate mr-2 text-yellow-500"}"></i>CERTIFICATE</h1>
            <p>These are my certificate</p>
            <div class="${"list-cer svelte-owgv9i"}"><div class="${"svelte-owgv9i"}"><img src="${"/public/Images/certificate/cer1-python.png"}" alt="${""}" class="${"svelte-owgv9i"}">
                    <p>AITS Python Camp</p></div>
                <div class="${"svelte-owgv9i"}"><img src="${"/public/Images/certificate/cer2-seacamp.png"}" alt="${""}" class="${"svelte-owgv9i"}">
                    <p>Seacamp</p></div>
                <div class="${"svelte-owgv9i"}"><img src="${"/public/Images/certificate/cer3-quantum.png"}" alt="${""}" class="${"svelte-owgv9i"}">
                    <p>Quantum Computer</p></div>
                <div class="${"svelte-owgv9i"}"><img src="${"/public/Images/certificate/cer4-nano.png"}" alt="${""}" class="${"svelte-owgv9i"}">
                    <p>Nano Technology</p></div></div></div>
        <div class="${"pt-[70px] p-10"}"><h1 class="${"text-2xl flex items-center text-yellow-500"}"><i class="${"fa-solid fa-diagram-project mr-2 text-yellow-500"}"></i>PROJECT</h1>
            <p>These are my project</p>
            <div class="${"list-project svelte-owgv9i"}"><div class="${"w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]"}"><div class="${"flex items-center justify-between"}"><div class="${"flex items-center"}"><i class="${"fa-brands fa-github text-2xl"}"></i>
                            <p class="${"text-[14px] ml-2 font-poppins_b"}">HourlyNotify</p></div>
                        <a href="${"https://github.com/PhubestSrikooon/HourlyNotify"}"><span class="${"material-symbols-outlined pl-2"}">open_in_new</span></a></div>
                    <p class="${"text-[14px] text-gray-300 mt-2"}">Reminder program that will notify you at the specified time.</p></div>
                <div class="${"w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]"}"><div class="${"flex items-center justify-between"}"><div class="${"flex items-center"}"><i class="${"fa-brands fa-github text-2xl"}"></i>
                            <p class="${"text-[14px] ml-2 font-poppins_b"}">SimpleCleaner</p></div>
                        <a href="${"https://github.com/PhubestSrikooon/SimpleCleaner"}"><span class="${"material-symbols-outlined pl-2"}">open_in_new</span></a></div>
                    <p class="${"text-[14px] text-gray-300 mt-2"}">A simple cleaner that i made for school project</p></div>
                <div class="${"w-[300px] h-[170px] p-4 bg-black border-gray-500 border-2 rounded-2xl m-[5px]"}"><div class="${"flex items-center justify-between"}"><div class="${"flex items-center"}"><i class="${"fa-brands fa-github text-2xl"}"></i>
                            <p class="${"text-[14px] ml-2 font-poppins_b"}">RunSampleNative</p></div>
                        <a href="${"https://github.com/PhubestSrikooon/RunSampleNative"}"><span class="${"material-symbols-outlined pl-2"}">open_in_new</span></a></div>
                    <p class="${"text-[14px] text-gray-300 mt-2"}">Run Sample Native is a program designed for testing antivirus protection.</p></div></div></div></div>
</section>`;
});
export {
  Page as default
};
