

// import postgres from 'https://deno.land/x/postgresjs/mod.js'

// const sql = postgres({
//     user: "aure",
//   password: "jas11jas11",
//   database: "ttec-euromillones",
//   hostname: "postgresql-118326-0.cloudclusters.net",
//   port: 18718
// }) // will use psql environment variables

// export default sql



import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";


//postgresql://aure:jas11jas11@postgresql-118326-0.cloudclusters.net:18718/ttec-euromillones?schema=public

const client = new Client({
  
  user: "aure",
  password: "jas11jas11",
  database: "ttec-euromillones",
  hostname: "postgresql-118326-0.cloudclusters.net",
  port: 18718,
});
await client.connect();

export default client;