import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string | undefined | null | {};
  date: string | undefined | null | {};
  description: string | undefined | null | {};
  content: Document | undefined | null | {};
  slug: string | undefined | null | {};
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});