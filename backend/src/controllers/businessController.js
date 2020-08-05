const connection = require("../database/connection");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const upload = multer(uploadConfig);

module.exports = {
  async indexPhoto(request, response) {
    const url = await connection("image").select("*");

    return response.json(url);
  },

  async index(request, response) {
    const business = await connection("business").select("*");

    return response.json(business);
  },

  async create(request, response) {
    const {
      name,
      description,
      cep,
      bairro,
      rua,
      numero,
      whatsapp,
      facebook,
      instagram,
      call,
      category,
      sub_category,
      sub_category_two
    } = request.body;

    await connection("business").insert({
      name,
      description,
      cep,
      bairro,
      rua,
      numero,
      whatsapp,
      facebook,
      instagram,
      call,
      category,
      sub_category,
      sub_category_two
    });

    return response.status(200).send();
  },

  async delete(request, response) {
    const { id } = request.params;

    const business = await connection("business").where("id", id);

    await connection("business")
      .where("id", id)
      .delete();

    return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
      description,
      cep,
      bairro,
      rua,
      numero,
      whatsapp,
      facebook,
      instagram,
      call,
      category,
      sub_category,
      sub_category_two
    } = request.body;

    await connection("business")
      .where("id", id)
      .update({
        name,
        description,
        cep,
        bairro,
        rua,
        numero,
        whatsapp,
        facebook,
        instagram,
        call,
        category,
        sub_category,
        sub_category_two
      });

    return response.status(204).send();
  }
};
