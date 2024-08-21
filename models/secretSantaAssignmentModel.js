// secretSantaAssignmentModel.js

const mongoose = require('mongoose');

// Définition du schéma pour les assignations de Secret Santa
const secretSantaAssignmentSchema = new mongoose.Schema({
    giver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    }
});

// Création du modèle à partir du schéma
const SecretSantaAssignment = mongoose.model('SecretSantaAssignment', secretSantaAssignmentSchema);

module.exports = SecretSantaAssignment;
