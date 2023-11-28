/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent, u as unescapeHTML } from '../astro_df56cf40.mjs';
import 'clsx';
/* empty css                           */import contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer p-10 bg-base-200 text-base-content"> <nav> <header class="footer-title">Services</header> <a class="link link-hover">Branding</a> <a class="link link-hover">Design</a> <a class="link link-hover">Marketing</a> <a class="link link-hover">Advertisement</a> </nav> <nav> <header class="footer-title">Company</header> <a class="link link-hover">About us</a> <a class="link link-hover">Contact</a> <a class="link link-hover">Jobs</a> <a class="link link-hover">Press kit</a> </nav> <nav> <header class="footer-title">Legal</header> <a class="link link-hover">Terms of use</a> <a class="link link-hover">Privacy policy</a> <a class="link link-hover">Cookie policy</a> </nav> </footer> <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300"> <aside class="items-center grid-flow-col"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> <p>ACME Industries Ltd. <br>Providing reliable tech since 1992</p> </aside> <nav class="md:place-self-center md:justify-self-end"> <div class="grid grid-flow-col gap-4"> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> </div> </nav> </footer>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<li><a href="/"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
Home</a></li> <li><a href="#About"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
About</a></li> <li><a href="#Clients">Clients</a></li> <li><a href="#Portfolio">Portfolio</a></li> <li><a href="#Contact">Contact</a></li>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/Navigation.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50"> <div class="navbar bg-base-100"> <div class="flex-1"> <a class="btn btn-ghost normal-case text-xl">Danek Dental Lab</a> </div> <div class="flex-none"> <ul class="menu menu-horizontal px-1"> <li><a>Link</a></li> <li> <details> <summary>
Parent
</summary> <ul class="p-2 bg-base-100"> <li><a>Link 1</a></li> <li><a>Link 2</a></li> </ul> </details> </li> </ul> <label class="swap swap-rotate"> <!-- this hidden checkbox controls the state --> <input type="checkbox" class="theme-controller" value="dark"> <!-- moon icon --> <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg> <!-- sun icon --> <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> </label> <div class="dropdown dropdown-end" id="header-navigation"> <label tabindex="0" class="btn btn-ghost rounded-btn"> <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path></svg> </label> <ul tabindex="0" id="header-navigation-content" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </ul> </div> </div> </div> </header>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen bg-base-200"> <div class="hero-content flex-col lg:flex-row-reverse"> <img src="src/img/amr-taha-FMcKJXPQtY0-unsplash.jpg" class="max-w-sm rounded-lg shadow-2xl"> <div class="pr-24"> <h1 class="mb-12 text-7xl font-bold">Crafting Smiles, One Tooth at a Time.</h1> <p class="">Danek Dental Lab is a distinguished dental laboratory committed to the artistry of creating radiant smiles. 
					With the motto "Crafting Smiles, One Tooth at a Time," the lab embodies a dedication to precision and aesthetic excellence in dental prosthetics. 
					Renowned for its meticulous craftsmanship, Danek Dental Lab seamlessly blends science and art to deliver bespoke dental solutions, 
					enhancing both function and beauty with every meticulously crafted tooth.
</p> <span class="mt-12 flex justify-center"> <button class="btn btn-primary">Get in contact with us</button> </span> </div> </div> </div> `;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/HeroSection.astro", void 0);

const contentfulClient = contentful.createClient({
  space: "5bbtl5mo2zft",
  accessToken: "z54iwSbBgt1M62jJMPq5Jpu2_UXu03c385KwEhoyx3k"
});

const $$Astro$1 = createAstro();
const $$BlogPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPreview;
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost"
  });
  const posts = entries.items.map((item) => {
    const { title, date, description, slug } = item.fields;
    return {
      title,
      slug,
      description,
      date: new Date(date).toLocaleDateString()
    };
  });
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl mt-5 mb-8 border-b-2">My Blog</h1> <ul> ${posts.map((post) => renderTemplate`<li class="mb-8"> <a${addAttribute(`/posts/${post.slug}/`, "href")}> <h2 class="text-2xl">${post.title}</h2> </a> <time>${post.date}</time> <br> <article>${unescapeHTML(documentToHtmlString(post.description))}</article> </li>`)} </ul>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/BlogPreview.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Footer as a, contentfulClient as c, index as i };
