const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController'); // Importa el controlador correspondiente

router.get('/products', productController.getAllProducts); // Define una ruta y enlázala a un controlador
// Agrega más rutas aquí

module.exports = router;
