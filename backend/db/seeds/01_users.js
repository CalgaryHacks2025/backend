import users from '../../seed-data/users-data.js';

/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex('users').del();
  await knex('users').insert(users);
}
