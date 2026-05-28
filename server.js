require ('dotenv').config();
const moogoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const DB_URI= process.env.MONGODB_URI;

moogoose
    .connect(DB_URI)
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB: ', error.message);
        process.exit(1);
    });