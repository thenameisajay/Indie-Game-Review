import {readFile} from 'node:fs/promises';// To read the file from the file system.
import {marked} from 'marked';// To convert markdown to HTML.
import matter from 'gray-matter'; // To parse the front matter from the markdown file.

async  function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
    const {content ,data:{title,image,date}} = matter(text);
     const body = marked(content);
        return {title,image,date,body};
     
}

module.exports = {getReview};

