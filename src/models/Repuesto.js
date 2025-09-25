// src/models/Repuesto.js
const mongoose = require('mongoose');

const repuestoSchema = new mongoose.Schema({
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
    required: true,
    unique: true
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

}, { strict: false });

const Repuesto = mongoose.model('Repuesto', repuestoSchema);

module.exports = Repuesto;