const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  async user(request, response) {
    const { id } = request.params;

    const user = await connection("users")
      .where("id", id)
      .select("*");

    return response.json(user[0]);
  },

  async create(request, response) {
    const { name, email, password, whatsapp } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("users").insert({
      id,
      name,
      email,
      password,
      whatsapp
    });

    return response.status(201).send();
  },

  async delete(request, response) {
    const { id } = request.params;

    const user = await connection("users").where("id", id);

    await connection("users")
      .where("id", id)
      .delete();

    return response.status(200).send();
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, email, password, whatsapp } = request.body;

    await connection("users")
      .where("id", id)
      .update({
        name,
        email,
        whatsapp
      });

    return response.status(200).send();
  }
};
