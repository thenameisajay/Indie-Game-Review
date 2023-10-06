import React from 'react';
import Heading from "@/components/Heading";
import {getReview} from "@/lib/reviews";

export default async function StardewValleyPage() {

const review = await getReview('stardew-valley');
    return (
        <div>
           <Heading>{review.title}</Heading>
           <p className='italic pb-2'>{review.date}</p>
           <img src ={review.image} alt='stardew-valley' width={640} height={360} className='mb-2 rounded'/>
           <article dangerouslySetInnerHTML={{__html: review.body}} className='max-w-screen-sm prose prose-slate'/> 

        </div>
    )   ;
};

// article dang - is used for adding HTML content to the page. It is a security risk to add HTML content directly to the page. So, we use dangerouslySetInnerHTML to add HTML content to the page.