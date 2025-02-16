/**
 * @param { import("knex").Knex } knex
 */

export async function up(knex) {
    return knex.schema.createTable('animal_activity', function(table) {
      table.increments('id').primary();
      table.string('activity').notNullable();
      table.integer('user_id').unsigned().notNullable();
      table.integer('animal_id').unsigned().notNullable();
      table.timestamps(true, true);
  
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('animal_id').references('id').inTable('animals').onDelete('CASCADE');

    });
};

/**
 * @param { import("knex").Knex } knex
 */
  
export async function down(knex) {
    return knex.schema.dropTable('animal_activity');
};