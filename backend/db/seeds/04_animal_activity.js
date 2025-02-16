import animalActivity from '../../seed-data/animal_activity-data.js';

/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
    // Ensure animal table has required rows
    const animals = await knex('animals').select('id');
    const existingAnimalIds = animals.map((animal) => animal.id);
    const validData = animalActivity.filter((entry) => existingAnimalIds.includes(entry.animal_id));

    // Insert filtered seed data only if animal IDs exist
    await knex('animal_activity').del();
    await knex('animal_activity').insert(validData);
}
