import animals from '../../seed-data/animals-data.js';

/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex('animals').del(); // Clear existing data
  await knex('animals').insert(animals);
}
