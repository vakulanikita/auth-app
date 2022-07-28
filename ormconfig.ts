// import { DataSource } from "typeorm";

// export const connectionSource = new DataSource({
//   migrationsTableName: 'migrations',
//   type: 'postgres',
//   host: 'abul.db.elephantsql.com',
//   port: 5432,
//   username: 'rtyooyqx',
//   password: 'mwxdurMGLqXVeYHJpum1OO5ALHb5PZ1H',
//   database: 'rtyooyqx',
//   logging: false,
//   synchronize: false,
//   name: 'default',
//   entities: ['src/**.entity{.ts,.js}'],
//   url: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false }
// });

module.exports = {
  "type": "postgres",
  "host": "abul.db.elephantsql.com",
  "port": 5432,
  "entities": ["src/entity/post.entity", 'dist/src/entity/*.js'],
  "username": "rtyooyqx",
  "password": "mwxdurMGLqXVeYHJpum1OO5ALHb5PZ1H",
  "database": "rtyooyqx",
  "synchronize": true,
  "url": process.env.DATABASE_URL,
  "ssl": { rejectUnauthorized: false }
}