const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

// Rutas del CRUD
router.get('/', ordenController.getOrdenes);
router.post('/', ordenController.createOrden);
router.get('/:id', ordenController.getOrdenById);
router.put('/:id', ordenController.updateOrden);
router.delete('/:id', ordenController.deleteOrden);


module.exports = router;