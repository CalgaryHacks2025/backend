/**
 * @param { import("knex").Knex } knex
 */

export async function up(knex) {
    return knex.schema.createTable('user_activity', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.string('activity').notNullable();
      table.timestamps(true, true);
  
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 */
  
export async function down(knex) {
    return knex.schema.dropTable('user_activity');
};