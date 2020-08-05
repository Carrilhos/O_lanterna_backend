exports.up = function(knex) {
  return knex.schema.createTable("business", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("cep").notNullable();
    table.string("bairro").notNullable();
    table.string("rua").notNullable();
    table.string("numero").notNullable();
    table.string("whatsapp").notNullable();
    table.string("facebook").notNullable();
    table.string("instagram").notNullable();
    table.string("call").notNullable();
    table.string("category").notNullable();
    table.string("sub_category").notNullable();
    table.string("sub_category_two").notNullable();

    table.string("user_id_business");

    table
      .foreign("user_id_business")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("business");
};
