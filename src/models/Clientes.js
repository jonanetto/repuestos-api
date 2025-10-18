const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index:true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: {
            calle: { type: String, required: false },
            ciudad: { type: String, required: false },
            pais: { type: String, required: false },
        },
        required: true
    }
}, { strict: false, _id: false });

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;