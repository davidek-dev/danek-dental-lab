/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, u as unescapeHTML } from '../astro.bb26d84e.mjs';
import contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const contentfulClient = contentful.createClient({
  space: "5bbtl5mo2zft",
  accessToken: "z54iwSbBgt1M62jJMPq5Jpu2_UXu03c385KwEhoyx3k",
  host: "cdn.contentful.com"
});

const $$Astro = createAstro();
async function getStaticPaths() {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost"
  });
  const pages = entries.items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: documentToHtmlString(item.fields.content),
      date: new Date(item.fields.date).toLocaleDateString()
    }
  }));
  return pages;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { content, title, date } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <title>${title}</title>
  ${renderHead()}</head>
  <body>
    <h1>${title}</h1>
    <time>${date}</time>
    <article>${unescapeHTML(content)}</article>
  </body></html>`;
}, "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/david/Documents/GitHub/my-portfolio/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, contentfulClient as c };
