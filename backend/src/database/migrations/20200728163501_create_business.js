exports.up = function(knex) {
  return knex.schema.createTable("image", function(table) {
    table.string("image").notNullable();

    table.string("user_id");

    table
      .foreign("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("image");
};
