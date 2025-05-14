/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // crie um arquivo de migração do knex com id, descrição, marca e valor
    return knex.schema.createTable('produtos', function(table) {
        table.increments('id').primary();
        table.string('descricao', 255).notNullable();
        table.string('marca', 128).notNullable();
        table.decimal('valor').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
