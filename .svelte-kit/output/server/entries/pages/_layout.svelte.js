import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
/* empty css                 */import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1exrjsr{background:linear-gradient(180deg , var(--yellow-800),var(--yellow-800),transparent)}li.svelte-1exrjsr{list-style:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navlist = [
    { name: "Home", path: "/", image: "home" },
    {
      name: "Collection",
      path: "/collection",
      image: "inventory_2"
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="${"fixed z-50 w-[100%] svelte-1exrjsr"}"><div class="${"flex justify-between p-4 items-center"}"><div><a href="${"/"}" class="${"flex"}"><img src="${"favicon.png"}" class="${"mr-[4px] w-[20px] h-[20px]"}" alt="${"dog!"}"> Best!</a></div>
        <div class="${"hidden md:flex space-x-4 items-center"}">
            ${each(navlist, (list) => {
    return `<li class="${[
      "s-round-button1 svelte-1exrjsr",
      $page.url.pathname === list.path ? "active" : ""
    ].join(" ").trim()}"><a${add_attribute("href", list.path, 0)} class="${"flex items-center"}"><span class="${"material-symbols-outlined p-[5px]"}">${escape(list.image)}</span>
                        ${escape(list.name)}</a>
                </li>`;
  })}</div>

        <div class="${"md:hidden relative"}"><input type="${"checkbox"}" ${""} class="${"absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-6 h-6 opacity-0"}">
            ${`<span class="${"material-symbols-outlined p-2"}">menu</span>`}</div></div>
</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-black p-[32px] bottom-0"}"><p class="${"opacity-[0.5] text-center"}">Copyright \xA9 2022 Phubest Srikoon All Right Reserved</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
