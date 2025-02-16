exports.up = function(knex) {
    return knex.schema.createTable('user_activity', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.string('activity').notNullable();
      table.timestamps(true, true);
  
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('user_activity');
};