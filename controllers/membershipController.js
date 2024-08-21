const Membership = require('../models/membershipModel');

// Obtenir toutes les appartenances
exports.getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.json(memberships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer une nouvelle appartenance
exports.createMembership = async (req, res) => {
    const membership = new Membership(req.body);
    try {
        const newMembership = await membership.save();
        res.status(201).json(newMembership);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtenir une appartenance par ID
exports.getMembershipById = async (req, res) => {
    try {
        const membership = await Membership.findById(req.params.id);
        if (!membership) return res.status(404).json({ message: 'Appartenance non trouvée' });
        res.json(membership);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour une appartenance
exports.updateMembership = async (req, res) => {
    try {
        const updatedMembership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMembership) return res.status(404).json({ message: 'Appartenance non trouvée' });
        res.json(updatedMembership);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer une appartenance
exports.deleteMembership = async (req, res) => {
    try {
        const membership = await Membership.findByIdAndDelete(req.params.id);
        if (!membership) return res.status(404).json({ message: 'Appartenance non trouvée' });
        res.json({ message: 'Appartenance supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
