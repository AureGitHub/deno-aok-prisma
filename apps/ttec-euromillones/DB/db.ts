import { Database, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';

const connector = new PostgresConnector({
  database: 'vallegrande',
  host: '"postgresql-118326-0.cloudclusters.net',
  username: 'aure',
  password: 'jas11jas11',
  port: 18718, // optional
});

const db = new Database(connector);

export default db;


