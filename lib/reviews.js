import {readFile , readdir} from 'node:fs/promises';// To read the file from the file system.
import {marked} from 'marked';// To convert markdown to HTML.
import matter from 'gray-matter'; // To parse the front matter from the markdown file.


export async function getFeaturedReview(){
    const reviews = await getReviews();
  
    return reviews[0];
}

export async  function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
    const {content ,data:{title,image,date}} = matter(text);
     const body = marked(content);
        return {slug,title,image,date,body};
     
}

export async function getReviews(){
    const files = await readdir('./content/reviews');
    const slugs = await getSlugs();
    const reviews = [];
    for(const slug of slugs){
        const review = await getReview(slug);
        reviews.push(review);
    }
    reviews.sort((a,b) => new Date(b.date) - new Date(a.date));
    return reviews ;
};

export async function getSlugs(){
    const files = await readdir('./content/reviews');
    const slugs = files.filter(file => file.endsWith('.md')).map(file => file.replace('.md',''));
    return slugs ;
}