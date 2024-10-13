const express = require('express');
const cors = require('cors'); // Importa cors
const app = express();
const tareasRoutes = require('./views/tareasRoutes.js');

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Asegúrate de que tu servidor pueda manejar JSON

// Rutas para tareas
app.use("/tareas", tareasRoutes);

app.listen(3000, () => {
    console.log('Servidor Activo en http://localhost:3000');
});