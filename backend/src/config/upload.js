const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp"),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("HEX");
      const fileName = `${fileHash}`;

      return callback(null, fileName);
    }
  })
};
