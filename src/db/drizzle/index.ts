import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTable } from './schemas';
import Database from 'better-sqlite3';
//import { resolve } from 'path';

//const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabasePath = '/home/dutra/curso-javascript/next-blog/blog/db.sqlite3';
const sqliteDatabase = new Database(sqliteDatabasePath);
console.log(sqliteDatabasePath)
export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});
