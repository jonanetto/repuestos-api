const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const repuestosRoutes = require('./src/routes/repuestos');

// Carga el archivo de configuración de Swagger
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/repuestosDB')
.then(() => console.log('Conectado a la base de datos MongoDB'))
.catch(err => console.error('Error al conectar a la base de datos', err));

// Rutas de la API y docs
app.use('/api/repuestos', repuestosRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log(`Documentación de la API en http://localhost:${port}/api-docs`);
});