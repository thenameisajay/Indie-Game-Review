/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/order
import React from 'react';
import Image from 'next/image';
import Heading from '@/components/Heading'; // Using alias for components folder.
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/reviews';

// Next js uses file system routing. So,
// we can create a folder in app folder and add a page.jsx file in it/

export default async function HomePage() {
  const reviews= await getFeaturedReview(5);


  return (
    <div>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul>
        {reviews.map((review) => (

          <li key={review.slug} className="bg-white border rounded shadow  hover:shadow-xl w-80 font-orbitron font-semibold  sm:w-full">
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt={review.slug}
                className="rounded-t sm:rounded-l sm:rounded-r-none"
                width={320}
                height={180}
                priority
              />
              <div className='px-2 py-1 text-center sm:text-left'>
              <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
                {review.title}
                {' '}
              </h2>
              <p className='hidden pt-2 sm:block'>{review.subtitle}</p>
              </div>
              
            </Link>
          </li>



        )

        )}
      </ul>

    </div>
  );
}

// The key for designing responsive screens is to first design for mobile screens
// and then add media queries for larger screens. so define the styles for mobile screens first
// and then add media queries for larger screens using tailwind breakpoints.
