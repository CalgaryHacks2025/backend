/**
 * @param { import("knex").Knex } knex
 */
export async function up(knex) {
  // Ensure animals table exists before creating activity table
  const exists = await knex.schema.hasTable('animals');
  if (!exists) {
      throw new Error("The 'animals' table must exist before creating 'animal_activity'");
  }

  return knex.schema.createTable('animal_activity', (table) => {
      table.increments('id').primary();
      table.string('activity').notNullable();
      table.integer('animal_id').unsigned().notNullable();
      table.timestamp('timestamp').defaultTo(knex.fn.now()).notNullable();
      table.timestamps(true, true);
      table.foreign('animal_id').references('id').inTable('animals').onDelete('CASCADE');
  });
}

/**
* @param { import("knex").Knex } knex
*/
export async function down(knex) {
  return knex.schema.dropTableIfExists('animal_activity');
}
