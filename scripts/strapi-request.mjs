import {writeFileSync} from "node:fs";

const URL =  process.env.NEXT_API_URL || "http://localhost:1337";

const populate = "?populate=*"; // By default , strapi treats image as seperate object and does not include it in the api call , this code also includes the media in the call.

const endpoint = URL + '/api/reviews' + populate ;

const response = await fetch (endpoint);

const body = await response.json();

const formatted = JSON.stringify(body,null,2);
const file = "scripts/strapi-response.json";

writeFileSync(file,formatted,'utf-8');