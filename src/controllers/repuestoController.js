// src/controllers/repuestoController.js
const Orden = require('../models/Orden');
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

//TODO: Cambiarle el nombre a la función y documentación de swagger, ahora es getRepuestosVendidosPorMarca. Lo que hace es agrupar por marca y sumar la cantidad vendida de las órdenes.
// Falta punto 6 y editar caso de uso 3 con el marcador correspondientes (consulta comun).
exports.getMarcaRepuesto = async (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: 'ordenes', 
          localField: 'nro_serie', 
          foreignField: 'items.nro_serie', 
          as: 'ventas_ordenes' 
        }
      },
      { $unwind: '$ventas_ordenes' },
      { $unwind: '$ventas_ordenes.items' },
      {
        $match: {
          $expr: {
            $eq: ['$nro_serie', '$ventas_ordenes.items.nro_serie']
          }
        }
      },
      {
        $group: {
          _id: '$marca', 
          totalItemsVendidos: { $sum: '$ventas_ordenes.items.cantidad' } 
        }
      },
      {
        $sort: { totalItemsVendidos: -1 }
      }
    ];

    const ventasPorMarca = await Repuesto.aggregate(pipeline);
    res.status(200).json(ventasPorMarca);

  } catch (err) {
    console.error("Error en getVentasPorMarcaDesdeRepuestos:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getRepuestosCompatiblesByModelo = async (req, res) => {
  try {
    const repuestos = await Repuesto.find({ modelo_coche: req.params.modelo });
    res.status(200).json(repuestos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};