// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger'); // Import du middleware de journalisation
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const secretSantaRoutes = require('./routes/secretSantaRoutes');

const app = express();

// Middleware
app.use(logger); // Utilisation du middleware de journalisation
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/groups', groupRoutes);
app.use('/memberships', membershipRoutes);
app.use('/secret-santa', secretSantaRoutes);

// Gestion des erreurs
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs internes du serveur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erreur serveur interne' });
});

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
