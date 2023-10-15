import { writeFileSync } from "node:fs";
import qs from "qs";

const URL = process.env.NEXT_API_URL || "http://localhost:1337";

const populate =
  "?" +
  qs.stringify(
    {
        filters: {slug:{$eq:'hades-2018'}},     // At lease one slug value is returned 
      fields: ["slug", "title", "subtitle", "publishedAt"],
      populate: { image: { fields: ["url"] } },
      pagination: { pageSize: 6 },
    //   sort: ["publishedAt:desc"],
    },
    { encodeValuesOnly: true }
  ); // By default , strapi treats image as seperate object and does not include it in the api call , this code also includes the media in the call.

const endpoint = URL + "/api/reviews" + populate;

console.log(endpoint);

const response = await fetch(endpoint);

const body = await response.json();

const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";

writeFileSync(file, formatted, "utf-8");
