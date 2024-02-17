const mongoose = require("mongoose");

const medicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    especie: {
        type: String,
        required: true,
    },
    classificacao: {
        type: String,
        required:true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    criado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Medic', medicSchema);