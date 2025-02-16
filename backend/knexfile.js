// require('dotenv').config(); // Load .env file (CommonJS)

// module.exports = {  // Use module.exports (CommonJS)
//   development: {
//     client: 'mysql2',
//     connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     },
//     migrations: {
//       directory: './db/migrations',
//     },
//     seeds: {
//       directory: './db/seeds',
//     },
//   },
// };

import { config } from 'dotenv';

config();

export default {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};