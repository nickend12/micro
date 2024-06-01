const { Router } = require('express');
const { createProyecto, getProyectos, updateProyectoByID } = require('../controllers/proyecto');

const router = Router();

// Crear tipo de proyecto
router.post('/', createProyecto);

// Obtener todos los tipos de proyecto
router.get('/', getProyectos);

// Actualizar tipo de proyecto por ID
router.put('/:id', updateProyectoByID);

module.exports = router;
