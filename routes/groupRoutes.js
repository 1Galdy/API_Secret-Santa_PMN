// groupRoutes.js

const express = require('express');
const router = express.Router();
const Group = require('../models/groupModel');

// Route pour obtenir tous les groupes
router.get('/', async (req, res) => {
    try {
        const groups = await Group.find().populate('members');
        res.json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route pour créer un nouveau groupe
router.post('/', async (req, res) => {
    const group = new Group({
        name: req.body.name,
        members: req.body.members
    });
    try {
        const newGroup = await group.save();
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
