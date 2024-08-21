const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

// Routes pour les appartenances (memberships)
router.get('/', membershipController.getAllMemberships);
router.post('/', membershipController.createMembership);
router.get('/:id', membershipController.getMembershipById);
router.put('/:id', membershipController.updateMembership);
router.delete('/:id', membershipController.deleteMembership);

module.exports = router;
