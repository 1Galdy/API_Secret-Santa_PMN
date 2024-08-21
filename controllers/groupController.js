const Group = require('../models/groupModel');

// Obtenir tous les groupes
exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        res.json(groups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer un nouveau groupe
exports.createGroup = async (req, res) => {
    const group = new Group(req.body);
    try {
        const newGroup = await group.save();
        res.status(201).json(newGroup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtenir un groupe par ID
exports.getGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group) return res.status(404).json({ message: 'Groupe non trouvé' });
        res.json(group);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un groupe
exports.updateGroup = async (req, res) => {
    try {
        const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGroup) return res.status(404).json({ message: 'Groupe non trouvé' });
        res.json(updatedGroup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un groupe
exports.deleteGroup = async (req, res) => {
    try {
        const group = await Group.findByIdAndDelete(req.params.id);
        if (!group) return res.status(404).json({ message: 'Groupe non trouvé' });
        res.json({ message: 'Groupe supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
