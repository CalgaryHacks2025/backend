exports.up = function(knex) {
    return knex.schema.createTable('adoptions', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('animal_id').unsigned().notNullable();
      table.date('adoption_date').notNullable();
      table.timestamps(true, true);
  
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('animal_id').references('id').inTable('animals').onDelete('CASCADE');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('adoptions');
};