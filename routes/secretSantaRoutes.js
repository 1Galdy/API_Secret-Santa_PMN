// secretSantaRoutes.js

const express = require('express');
const router = express.Router();
const SecretSantaAssignment = require('../models/secretSantaAssignmentModel');

// Route pour obtenir toutes les assignations de Secret Santa
router.get('/', async (req, res) => {
    try {
        const assignments = await SecretSantaAssignment.find().populate('giver').populate('receiver').populate('group');
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route pour créer une assignation de Secret Santa
router.post('/', async (req, res) => {
    const assignment = new SecretSantaAssignment({
        giver: req.body.giver,
        receiver: req.body.receiver,
        group: req.body.group
    });
    try {
        const newAssignment = await assignment.save();
        res.status(201).json(newAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
