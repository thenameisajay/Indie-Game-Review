// import { readFile, readdir } from "node:fs/promises"; // To read the file from the file system.
import { marked } from "marked"; // To convert markdown to HTML.
// import matter from "gray-matter"; // To parse the front matter from the markdown file.
import qs from "qs";
// import { writeFileSync } from "node:fs";

const URL = process.env.NEXT_API_URL || "http://localhost:1337";

export async function getFeaturedReview() {
  const reviews = await getReviews();

  return reviews[0];
}

export async function getReview(slug) {
  const populate =
    "?" +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "subtitle", "publishedAt", "body"],
        populate: { image: { fields: ["url"] } },
        pagination: { pageSize: 6 },
        //   sort: ["publishedAt:desc"],
      },
      { encodeValuesOnly: true }
    ); // By default , strapi treats image as seperate object and does not include it in the api call , this code also includes the media in the call.

  const endpoint = URL + "/api/reviews" + populate;

  const response = await fetch(endpoint);

  const { data } = await response.json();

  const { attributes } = data[0];

  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: URL + attributes.image.data.attributes.url,
    body: marked(attributes.body,{headerIds:false,mangle:false}),
  };
}

export async function getReviews() {
  const populate =
    "?" +
    qs.stringify(
      {
        fields: ["slug", "title", "subtitle", "publishedAt"],
        populate: { image: { fields: ["url"] } },
        pagination: { pageSize: 6 },
        sort: ["publishedAt:desc"],
      },
      { encodeValuesOnly: true }
    ); // By default , strapi treats image as seperate object and does not include it in the api call , this code also includes the media in the call.

  const endpoint = URL + "/api/reviews" + populate;

  const response = await fetch(endpoint);

  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: URL + attributes.image.data.attributes.url,
  }));
}

export async function getSlugs() {
  const populate =
  "?" +
  qs.stringify(
    {
      fields: ["slug"],
      pagination: { pageSize: 100 },
      sort: ["publishedAt:desc"],
    },
    { encodeValuesOnly: true }
  ); // By default , strapi treats image as seperate object and does not include it in the api call , this code also includes the media in the call.

const endpoint = URL + "/api/reviews" + populate;

const response = await fetch(endpoint);

const { data } = await response.json();
return data.map(({ attributes }) => ({
  slug: attributes.slug,
}));
}
