import React from "react";
import Heading from "@/components/Heading"; // Using alias for components folder.
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";




// Next js uses file system routing. So, we can create a folder in app folder and add a page.jsx file in it.
export default async function HomePage() {
  const review =  await getFeaturedReview();

  return (
    <div>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border rounded shadow  hover:shadow-xl w-80 font-orbitron font-semibold  sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src= {review.image}
            alt= {review.slug}
            className="rounded-t sm:rounded-l sm:rounded-r-none"
            width={320}
            height={180}
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">{review.title} </h2>
         
        </Link>
      </div>
    </div>
  );
}

// The key for designing responsive screens is to first design for mobile screens and then add media queries for larger screens. so define the styles for mobile screens first and then add media queries for larger screens using tailwind breakpoints.