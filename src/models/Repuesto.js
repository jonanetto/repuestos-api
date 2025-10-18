// src/models/Repuesto.js
const mongoose = require('mongoose');

const repuestoSchema = new mongoose.Schema({
  nro_serie: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo_coche: {
    type: String,
    required: true
  },
  numero_pieza: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  }

}, { strict: false, _id: false });

const Repuesto = mongoose.model('Repuesto', repuestoSchema);

module.exports = Repuesto;