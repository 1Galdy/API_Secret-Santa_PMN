// userModel.js

const mongoose = require('mongoose');

// Définition du schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Autres champs comme mot de passe, rôle, etc.
});

// Création du modèle à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
