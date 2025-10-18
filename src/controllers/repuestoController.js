// src/controllers/repuestoController.js
const Repuesto = require('../models/Repuesto');

exports.getRepuestos = async (req, res) => {
  try {
    const repuestos = await Repuesto.find();
    res.status(200).json(repuestos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRepuesto = async (req, res) => {
  const repuesto = new Repuesto(req.body);
  try {
    const newRepuesto = await repuesto.save();
    res.status(201).json(newRepuesto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getRepuestoById = async (req, res) => {
  try {
    const repuesto = await Repuesto.findById(req.params.id);
    if (!repuesto) return res.status(404).json({ message: 'Repuesto no encontrado' });
    res.status(200).json(repuesto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRepuesto = async (req, res) => {
  try {
    const updatedRepuesto = await Repuesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRepuesto) return res.status(404).json({ message: 'Repuesto no encontrado' });
    res.status(200).json(updatedRepuesto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRepuesto = async (req, res) => {
  try {
    const repuesto = await Repuesto.findByIdAndDelete(req.params.id);
    if (!repuesto) return res.status(404).json({ message: 'Repuesto no encontrado' });
    res.status(200).json({ message: 'Repuesto eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMarcaRepuesto = async (req, res) => {
  try {
    const repuestos = await Repuesto.aggregate([
      {
        $group: {
          _id: "$marca",
          totalRepuestos: { $sum: 1 }, 
        },
      },
      {
        $sort: { totalRepuestos: -1 },
      },
    ]);
    res.status(200).json(repuestos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};