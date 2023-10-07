import Heading from "@/components/Heading";

// Meta data for the page. https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata ={
  title: 'About',
  description: 'Only the best indie games, reviewed for you.',
  page: 'home',
  locale : 'en_US',
  type : 'website',
}

export default function AboutPage() {
    return (
        <div>
      <Heading>About</Heading>
        <p>
        A webpage for learning Next.js.
        </p>
        </div>
        );
}
