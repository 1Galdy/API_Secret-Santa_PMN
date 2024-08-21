// groupModel.js

const mongoose = require('mongoose');

// Définition du schéma pour les groupes
const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// Création du modèle à partir du schéma
const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
