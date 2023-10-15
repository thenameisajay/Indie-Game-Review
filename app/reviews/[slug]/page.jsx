import React from "react";
import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";
import ShareButtons from "@/components/ShareButtons";
import { notFound } from "next/navigation"; 

export const dynamic = 'force-dynamic';



// export async function getStaticParams() {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

// Dynamic metadata generation.
export async function generateMetadata(props) {
  const review = await getReview(props.params.slug);

 if(!review) {
  notFound();
 }
  return {
    title: review.title,
  };
}

export default async function ReviewPage(props) {
  const review = await getReview(props.params.slug);
  if(!review) {
    notFound();
   }

  return (
    <div>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>

        <ShareButtons />
      </div>
      <img
        src={review.image}
        alt={props.params.slug}
        width={640}
        height={360}
        className="mb-2 rounded"
      />
    <article
        dangerouslySetInnerHTML={{
            __html: review.body,
        }}
        className="max-w-screen-sm prose prose-slate"
    />
    </div>
  );
}

// article dang - is used for adding HTML content to the page. 
// It is a security risk to add HTML content directly to the page.
// So, we use dangerouslySetInnerHTML to add HTML content to the page.
