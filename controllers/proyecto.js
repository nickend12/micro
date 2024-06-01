const Proyecto = require('../models/proyecto');
const { request, response } = require('express');

const createProyecto = async (req = request, res = response) => {
    try {
        const numero = req.body.numero;
        const titulo = req.body.titulo;
        const fechaEntrega = req.body.fechaEntrega;
        const fechaIniciacion = req.body.fechaIniciacion;
        const valor = req.body.valor;
        const cliente = req.body.cliente;
        const tipoProyecto = req.body.tipoProyecto;
        const universidad = req.body.universidad;
        const etapa = req.body.etapa;

        const proyectoDB = await Proyecto.findOne({ numero });
        if (proyectoDB) {
            return res.status(400).json({ msg: 'Ya existe' });
        }

        const data = { numero, 
                       titulo, 
                       fechaEntrega, 
                       fechaIniciacion, 
                       valor,
                       cliente,
                       tipoProyecto,
                       universidad,
                       etapa
                     };
        const proyecto = new Proyecto(data);
        await proyecto.save();
        return res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const getProyectos = async (req = request, res = response) => {
    try {
        const proyectoDB = await Proyecto.find();
        return res.json(proyectoDB);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const updateProyectoByID = async (req = request, res = response) => {
    try {
        const data = req.body;
        const id = req.params.id;
        data.fechaActualizacion = new Date();
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true });
        return res.json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
};

module.exports = { createProyecto, getProyectos, updateProyectoByID };
