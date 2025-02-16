import animalActivity from '../../seed-data/animal_activity-data.js';

/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex('animal_activity').del(); // Clear existing data
  await knex('animal_activity').insert(animalActivity);
}
