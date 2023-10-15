"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading';
import { getReviews, getPageCount } from '@/lib/reviews';

export default function ReviewsPage(props) {

    const pageSize = 6;
    const page = parsePageParam(props.searchParams.page)



    const [reviews, setReviews] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        async function fetchReviews() {
            const reviewsData = await getReviews(pageSize, page);
            setReviews(reviewsData);
            let tpageCount = await getPageCount(pageSize, page);
            setPageCount(tpageCount);

        }

        fetchReviews();

    }, []);

    function parsePageParam(paramValue) {
        if (paramValue) {
            const page = parseInt(paramValue);
            if (isFinite(page) && page > 0) {
                return page;
            } else {
                return 1;
            }
        }
        return 1;


    }



    return (
        <div>
            <Heading>Reviews</Heading>
            <div className='flex gap-2 pb-3'>
                {page > 1 ? (
                    <a href={`/reviews?page=${page - 1}`} key="page-1-link">
                        &lt;
                    </a>
                ) : (
                    <span>  &lt;</span>
                )}
                <span>Page {page} of {pageCount}</span>
                {page < pageCount ? (  <a href={`/reviews?page=${page + 1}`} key="page-2-link">
                    &gt;
                </a>):(
                <span>  &gt;</span>
                )}





            </div>
            {reviews.map((review) => (

                <ul key={review.id} className="flex flex-col gap-3">
                    <li className="bg-white flex flex-col flex-wrap gap-3 justify-center items-center rounded-t shadow w-80 hover:shadow-xl font-orbitron font-semibold mb-3">
                        <Link href={`/reviews/${review.slug}`} key={review.slug}>
                            <Image src={review.image} alt={review.slug} width={640} height={360} className='mb-2 rounded' priority />
                            <h2 className="py-1 justify-center items-center text-center flex border-t-2 w-fit">{review.title}</h2>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}
