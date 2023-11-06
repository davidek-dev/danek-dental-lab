import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { EntrySkeletonType } from 'contentful';

export interface BlogPost extends EntrySkeletonType {
  fields: {
    title: string;
    date: string; // or whatever type your date field has
    description: string;
    slug: string;
    content: string | void
    // Add other fields if needed
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});