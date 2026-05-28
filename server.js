require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI;

if (DB_URI) {
    mongoose
        .connect(DB_URI)
        .then(() => {
            console.log('Conectado a MongoDB');
            app.listen(PORT, () => {
                console.log(`Servidor corriendo en http://localhost:${PORT}`);
            });
        })
        .catch((error) => {
            console.error('Error al conectar a MongoDB: ', error.message);
            process.exit(1);
        });
} else {
    console.warn('MONGODB_URI no está definido. Iniciando servidor sin conexión a la base de datos.');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}