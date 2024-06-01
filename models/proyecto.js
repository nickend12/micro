const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Número requerido']
    },
    titulo: {
        type: String
    },
    fechaEntrega: {
        type: Date,
        default: new Date()
    },
    fechaIniciacion: {
        type: Date,
        default: new Date()
    },
    valor: {
        type: Number
    },
    cliente: {       
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        require: false,     
    },
    tipoProyecto: {       
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        require: false,     
    },
    universidad: {       
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        require: false,     
    },
    etapa: {       
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        require: false,     
    }
});

module.exports = model('Proyecto', ProyectoSchema);
