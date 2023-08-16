import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import shelterRoutes from './routes/shelterRoutes.js'; // Importar las nuevas rutas de albergues
import productRoutes from './routes/productRoutes.js'; // Importar las nuevas rutas de productos

const app = express();

// Configurar middlewares
app.use(express.json());
app.use(cors());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/shelters', shelterRoutes); // Usar las rutas de albergues
app.use('/products', productRoutes); // Usar las rutas de productos

export default app;
