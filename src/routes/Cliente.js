const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas del CRUD
router.get('/', clienteController.getClientes);
router.post('/', clienteController.createCliente);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);


module.exports = router;