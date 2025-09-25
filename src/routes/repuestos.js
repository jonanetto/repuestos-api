// src/routes/repuestos.js
const express = require('express');
const router = express.Router();
const repuestoController = require('../controllers/repuestoController');

// Rutas del CRUD
router.get('/por-marca', repuestoController.getMarcaRepuesto);
router.get('/', repuestoController.getRepuestos);
router.post('/', repuestoController.createRepuesto);
router.get('/:id', repuestoController.getRepuestoById);
router.put('/:id', repuestoController.updateRepuesto);
router.delete('/:id', repuestoController.deleteRepuesto);


module.exports = router;