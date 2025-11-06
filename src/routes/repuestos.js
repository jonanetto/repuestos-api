// src/routes/repuestos.js
const express = require('express');
const router = express.Router();
const repuestoController = require('../controllers/repuestoController');

// Rutas del CRUD
router.get('/vendidosPorMarca', repuestoController.getRepuestosVendidosPorMarca);
router.get('/', repuestoController.getRepuestos);
router.post('/', repuestoController.createRepuesto);
router.get('/:id', repuestoController.getRepuestoById);
router.put('/:id', repuestoController.updateRepuesto);
router.delete('/:id', repuestoController.deleteRepuesto);
router.get('/compatibles/:modelo', repuestoController.getRepuestosCompatiblesByModelo);


module.exports = router;