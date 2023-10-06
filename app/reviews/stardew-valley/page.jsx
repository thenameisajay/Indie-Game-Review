import React from 'react';
import {readFile} from 'node:fs/promises';// To read the file from the file system.
import {marked} from 'marked';// To convert markdown to HTML.
import Heading from "@/components/Heading";
export default async function StardewValleyPage() {
 const text = await readFile('./content/reviews/stardew-valley.md', 'utf-8');
 const html = marked(text);
    return (
        <div>
           <Heading>Stardew Valley</Heading>
           <img src ="/images/stardew-valley.jpg" alt='stardew-valley' width={320} height={180} className='mb-2 rounded'/>
           <article dangerouslySetInnerHTML={{__html: html}} className='prose'/> 
        </div>
    )   ;
};

// article dang - is used for adding HTML content to the page. It is a security risk to add HTML content directly to the page. So, we use dangerouslySetInnerHTML to add HTML content to the page.