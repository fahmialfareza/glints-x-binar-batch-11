const { barang, pelanggan, pemasok } = require("../../models"); // Import all models
const validator = require("validator");

module.exports.create = async (req, res, next) => {
  try {
    let errors = [];
    // Find Pemasok
    let findPemasok = await pemasok.findOne({
      where: {
        id: req.body.id_pemasok,
      },
    });

    // Pemasok not found
    if (!findPemasok) {
      errors.push("Pemasok Not Found");
    }

    // Check harga is number
    if (!validator.isNumeric(req.body.harga)) {
      errors.push("Harga must be a number");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    req.body.directory = "barang";

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return next(e);
  }
};
