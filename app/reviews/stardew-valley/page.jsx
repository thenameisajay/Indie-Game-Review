import React from 'react';
import {readFile} from 'node:fs/promises';// To read the file from the file system.
import {marked} from 'marked';// To convert markdown to HTML.
import Heading from "@/components/Heading";
import matter from 'gray-matter'; // To parse the front matter from the markdown file.

export default async function StardewValleyPage() {
 const text = await readFile('./content/reviews/stardew-valley.md', 'utf-8');
const {content ,data:{title,image,date}} = matter(text);
 const html = marked(content);
 

    return (
        <div>
           <Heading>{title}</Heading>
           <p className='italic pb-2'>{date}</p>
           <img src ={image} alt='stardew-valley' width={640} height={360} className='mb-2 rounded'/>
           <article dangerouslySetInnerHTML={{__html: html}} className='max-w-screen-sm prose prose-slate'/> 
        </div>
    )   ;
};

// article dang - is used for adding HTML content to the page. It is a security risk to add HTML content directly to the page. So, we use dangerouslySetInnerHTML to add HTML content to the page.