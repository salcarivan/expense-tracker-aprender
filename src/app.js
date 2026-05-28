const express= require ('express');
const expenseRoutes = require ('./routes/expenseRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware para para parsear JSON en el body de la peticiones
app.use(express.json());

// Rutas
app.use('/api/expenses', expenseRoutes);

// Middleware de manejo de errores (siempre al final)
app.use(errorHandler);

module.exports= app;