/**
 * @param { import("knex").Knex } knex
 */
export async function up(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 */
  
export async function down(knex) {
    return knex.schema.dropTable('users');
};