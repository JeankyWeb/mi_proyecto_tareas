const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController.js');

router.get('/', tareaController.consultarTarea);
router.post('/', tareaController.ingresarTarea);
router.put('/actualizar', tareaController.actualizarTarea);
router.delete('/eliminar', tareaController.eliminarTarea);

module.exports = router;