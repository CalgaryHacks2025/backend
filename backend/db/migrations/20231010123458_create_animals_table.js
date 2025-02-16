exports.up = function(knex) {
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
  
exports.down = function(knex) {
    return knex.schema.dropTable('animals');
};