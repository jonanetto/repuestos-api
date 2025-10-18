const Orden = require('../models/Orden');

exports.createOrden = async (req, res) => {
    const orden = new Orden(req.body);
    try {
        const newOrden = await orden.save();
        res.status(201).json(newOrden);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.find();
        res.status(200).json(ordenes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};