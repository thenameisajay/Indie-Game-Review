// This is the review page. It will list all the reviews.
// To create a new page , create a folder in app folder and add a page.jsx file in it. (next js way).

import Image from "next/image";
import Link from "next/link"; // Link is a component that allows us to link to other pages in our app.
import React from 'react';
import Heading from '@/components/Heading';
import {getReviews} from '@/lib/reviews';
export default async function ReviewsPage() {

const reviews = await getReviews();


    return (
        <div>
          <Heading>Reviews</Heading>
          {reviews.map(review => (
            
            <ul className="flex flex-col gap-3">
            <li className="bg-white flex flex-col flex-wrap gap-3  justify-center items-center   rounded-t shadow w-80 hover:shadow-xl font-orbitron font-semibold mb-3 ">
                <Link href={`/reviews/${review.slug}`}>
                <Image src ={review.image} alt={review.slug} width={640} height={360} className='mb-2 rounded'/>
                    <h2 className="py-1 justify-center items-center text-center flex border-t-2 w-fit ">{review.title}</h2>
                </Link>
            </li>
            </ul>
            ))}
           
        </div>
    )   ;
};