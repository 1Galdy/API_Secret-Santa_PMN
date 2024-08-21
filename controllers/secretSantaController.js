const SecretSantaAssignment = require('../models/secretSantaAssignmentModel');

// Obtenir toutes les assignations Secret Santa
exports.getAllSecretSantaAssignments = async (req, res) => {
    try {
        const assignments = await SecretSantaAssignment.find();
        res.json(assignments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer une nouvelle assignation Secret Santa
exports.createSecretSantaAssignment = async (req, res) => {
    const assignment = new SecretSantaAssignment(req.body);
    try {
        const newAssignment = await assignment.save();
        res.status(201).json(newAssignment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtenir une assignation Secret Santa par ID
exports.getSecretSantaAssignmentById = async (req, res) => {
    try {
        const assignment = await SecretSantaAssignment.findById(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignation non trouvée' });
        res.json(assignment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour une assignation Secret Santa
exports.updateSecretSantaAssignment = async (req, res) => {
    try {
        const updatedAssignment = await SecretSantaAssignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAssignment) return res.status(404).json({ message: 'Assignation non trouvée' });
        res.json(updatedAssignment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer une assignation Secret Santa
exports.deleteSecretSantaAssignment = async (req, res) => {
    try {
        const assignment = await SecretSantaAssignment.findByIdAndDelete(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignation non trouvée' });
        res.json({ message: 'Assignation supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
