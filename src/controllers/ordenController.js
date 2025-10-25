const Orden = require('../models/Orden');

exports.getOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.find();
        res.status(200).json(ordenes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createOrden = async (req, res) => {
    const orden = new Orden(req.body);
    try {
        const newOrden = await orden.save();
        res.status(201).json(newOrden);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.getOrdenById = async (req, res) => {
    try {
        const orden = await Orden.findById(req.params.id);
        if (!orden) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(orden);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updateOrden = async (req, res) => {
    try {
        const updatedOrden = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrden) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(updatedOrden);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.deleteOrden = async (req, res) => {
    try {
        const orden = await Orden.findByIdAndDelete(req.params.id);
        if (!orden) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json({ message: 'Orden eliminada conxito' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
