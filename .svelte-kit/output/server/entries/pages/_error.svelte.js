import { c as create_ssr_component, b as subscribe, f as escape } from "../../chunks/index.js";
/* empty css                 */import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main_title.svelte-18m6gea.svelte-18m6gea{position:absolute;top:50%;left:10%;transform:translateY(-50%)}.side_title.svelte-18m6gea.svelte-18m6gea{position:absolute;top:50%;right:10%;transform:translateY(-50%)}.side_title.svelte-18m6gea span.svelte-18m6gea{font-size:10vw}.scroll_down.svelte-18m6gea.svelte-18m6gea{text-align:center;position:absolute;bottom:5%;left:50%;transform:translateX(-50%);opacity:.7}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="${"h-screen overflow-hidden relative"}"><div class="${"main_title svelte-18m6gea"}"><h1 class="${"font-poppins_b text-5xl"}">${escape($page.status)}</h1>
        <p class="${"font-poppins-r text-xl text-gray-300 mt-2"}">${escape((_a = $page.error) == null ? void 0 : _a.message)}</p>
        <button class="${"p-button1 flex overflow-hidden items-center"}"><span class="${"material-symbols-outlined bg-transparent text-yellow-900"}">arrow_left</span>
            Back
        </button></div>
    <div class="${"side_title svelte-18m6gea"}"><span class="${"material-symbols-outlined svelte-18m6gea"}">error</span></div>
    <div class="${"scroll_down svelte-18m6gea"}"><span class="${"material-symbols-outlined "}">arrow_left</span>
        <p>Go back to home</p></div>
</section>`;
});
export {
  Error as default
};
