import mongoose from "mongoose";

const responsesSchema = new mongoose.Schema({
  name: { type: String, default: null },
  phone: { type: String, default: null },
  city: { type: String, default: null },
  location: { type: String, default: null },
  colonia: { type: String, default: null },
  codigoPostal: { type: String, default: null },
  fecha_creacion: { type: Date, default: Date.now },
});

mongoose.models = {};

const response = mongoose.model("Response", responsesSchema);

module.exports = response;
