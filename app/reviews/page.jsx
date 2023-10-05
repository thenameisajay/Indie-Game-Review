// This is the review page. It will list all the reviews.
// To create a new page , create a folder in app folder and add a page.jsx file in it. (next js way).
import Link from "next/link"; // Link is a component that allows us to link to other pages in our app.
import React from 'react';
import Heading from '@/components/Heading';
export default function ReviewsPage() {
    return (
        <div>
          <Heading>Reviews</Heading>
           
           <ul className="flex flex-col gap-3">
            <li className="bg-white flex flex-col gap-3 rounded-t shadow w-80 hover:shadow-xl font-orbitron font-semibold">
                <Link href="/reviews/hollow-knight">
                <img src ="/images/hollow-knight.jpg" alt="Hollow Knight" className="rounded-t"/>
                    <h2 className="py-1 text-center"> Hollow Knight</h2>
                </Link>
            </li>
          
            <li className="bg-white flex flex-col gap-3 rounded-t shadow w-80 hover:shadow-xl font-orbitron font-semibold">
                <Link href="/reviews/stardew-valley">
                <img src ="/images/stardew-valley.jpg" alt="Stardew Valley" className="rounded-t"/>
                    <h2 className="py-1 text-center"> Stardew Valley</h2>
                </Link>
            </li>
           </ul>
        </div>
    )   ;
};