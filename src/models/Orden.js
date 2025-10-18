const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    id_cliente: {
        type: Number, //TO-DO a testear comportamiento y si está correcta la referencia.
        ref: 'Cliente',
        required: true
    },
    items: {
        type: [
            {
                nro_serie: { type: Number, required: true },
                cantidad: { type: Number, required: true },
                precio: { type: Number, required: true }
            }
        ],
        required: true
    },
    montoTotal: {
        type: Number,
        required: true
    }
}, { strict: false });

const Orden = mongoose.model('Orden', ordenSchema);

module.exports = Orden;