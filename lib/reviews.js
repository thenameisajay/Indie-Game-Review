import {readFile , readdir} from 'node:fs/promises';// To read the file from the file system.
import {marked} from 'marked';// To convert markdown to HTML.
import matter from 'gray-matter'; // To parse the front matter from the markdown file.
import qs from "qs";
import { writeFileSync } from "node:fs";

export async function getFeaturedReview(){
    const reviews = await getReviews();
  
    return reviews[0];
}

export async  function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
    const {content ,data:{title,image,date}} = matter(text);
     const body = marked(content);
        return {slug,title,image,date,body};
     
}

export async function getReviews(){
    const URL = process.env.NEXT_API_URL || "http://localhost:1337";

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

console.log(endpoint);

const response = await fetch(endpoint);

const {data} = await response.json();
return data.map(({attributes}) => ({
slug: attributes.slug,
title: attributes.title,
date :attributes.publishedAt.slice(0,'yyyy-mm-dd'.length),
image:URL + attributes.image.data.attributes.url


}))
};


export async function getSlugs(){
    const files = await readdir('./content/reviews');
    const slugs = files.filter(file => file.endsWith('.md')).map(file => file.replace('.md',''));
    return slugs ;
}