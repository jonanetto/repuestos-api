const Cliente = require('../models/Clientes');

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCliente = async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        const newCliente = await cliente.save();
        res.status(201).json(newCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.status(200).json(cliente);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.status(200).json(updatedCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.status(200).json({ message: 'Cliente eliminado con éxito' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};