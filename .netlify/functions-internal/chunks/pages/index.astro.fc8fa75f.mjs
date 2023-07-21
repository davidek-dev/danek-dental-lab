/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, b as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, u as unescapeHTML } from '../astro.bb26d84e.mjs';
/* empty css                           */import { c as contentfulClient } from './_slug_.astro.96d07d15.mjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'contentful';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-J7PV25F6">
		<h1 class="text-3xl font-bold underline astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">Astro</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
			<strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-J7PV25F6" })}
		</ul>

		<h1 class="astro-J7PV25F6">My Blog</h1>
		<ul class="astro-J7PV25F6">
		  ${posts.map((post) => renderTemplate`<li class="mb-8 astro-J7PV25F6">
			  <a${addAttribute(`/posts/${post.slug}/`, "href")} class="astro-J7PV25F6">
				<h2 class="astro-J7PV25F6">${post.title}</h2>
			  </a>
			  <time class="astro-J7PV25F6">${post.date}</time>
			  <br class="astro-J7PV25F6"> 
			  <article class="astro-J7PV25F6">${unescapeHTML(documentToHtmlString(post.description))}</article>
			</li>`)}
		</ul>

		<button class="btn w-64 rounded-full bg-black astro-J7PV25F6">
  Button
</button>
	</main>
` })}`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
