const Clientes = require('../models/Clientes');

exports.createCliente = async (req, res) => {
    const cliente = new Clientes(req.body);
    try {
        const newCliente = await cliente.save();
        res.status(201).json(newCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};