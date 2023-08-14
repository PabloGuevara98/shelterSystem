const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/database');
const routes = require('./routes'); // Importa las rutas de tu API

app.use(cors()); // Configura CORS para permitir solicitudes de diferentes dominios
app.use(express.json()); // Middleware para procesar solicitudes JSON

app.use('/api', routes); // Usa las rutas definidas en routes.js

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
