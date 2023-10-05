// This is the review page. It will list all the reviews.
// To create a new page , create a folder in app folder and add a page.jsx file in it. (next js way).
import Link from "next/link"; // Link is a component that allows us to link to other pages in our app.
import React from 'react';
import Heading from '@/components/Heading';
export default function ReviewsPage() {
    return (
        <div>
          <Heading>Reviews</Heading>
           <p>Here we'll list all the reviews.</p>
           <ul>
            <li>
                <Link href="/reviews/hollow-knight">
                    Hollow Knight
                </Link>
            </li>
          
            <li>
            <Link href="/reviews/stardew-valley">
                   Stardew Valley
                </Link>
            </li>
           </ul>
        </div>
    )   ;
};