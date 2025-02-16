/**
 * @param { import("knex").Knex } knex
 */

export async function up(knex) {
    return knex.schema.createTable('animals', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('species').notNullable();
      table.string('breed').notNullable();
      table.integer('age').notNullable();
      table.string('description').notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 */
  
export async function down(knex) {
    return knex.schema.dropTable('animals');
};