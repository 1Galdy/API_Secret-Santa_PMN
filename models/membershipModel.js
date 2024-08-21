// membershipModel.js

const mongoose = require('mongoose');

// Définition du schéma pour les adhésions (Membership)
const membershipSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member'
    }
});

// Création du modèle à partir du schéma
const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;
