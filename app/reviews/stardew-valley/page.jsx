import React from 'react';
import {readFile} from 'node:fs/promises';
import Heading from "@/components/Heading";
export default async function StardewValleyPage() {
 const text = await readFile('./content/reviews/stardew-valley.md', 'utf-8');

    return (
        <div>
           <Heading>Stardew Valley</Heading>
           <img src ="/images/stardew-valley.jpg" alt='stardew-valley' width={320} height={180} className='mb-2 rounded'/>
           <p>{text}</p>
        </div>
    )   ;
};