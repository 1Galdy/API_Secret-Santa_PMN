const express = require('express');
const router = express.Router();
const secretSantaController = require('../controllers/secretSantaController');

// Routes pour les assignations Secret Santa
router.get('/', secretSantaController.getAllSecretSantaAssignments);
router.post('/', secretSantaController.createSecretSantaAssignment);
router.get('/:id', secretSantaController.getSecretSantaAssignmentById);
router.put('/:id', secretSantaController.updateSecretSantaAssignment);
router.delete('/:id', secretSantaController.deleteSecretSantaAssignment);

module.exports = router;
