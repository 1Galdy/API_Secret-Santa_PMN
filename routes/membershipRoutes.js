// membershipRoutes.js

const express = require('express');
const router = express.Router();
const Membership = require('../models/membershipModel');

// Route pour obtenir toutes les adhésions
router.get('/', async (req, res) => {
    try {
        const memberships = await Membership.find().populate('user').populate('group');
        res.json(memberships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route pour créer une adhésion
router.post('/', async (req, res) => {
    const membership = new Membership({
        user: req.body.user,
        group: req.body.group,
        role: req.body.role
    });
    try {
        const newMembership = await membership.save();
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
