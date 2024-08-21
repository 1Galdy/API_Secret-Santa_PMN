const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Routes pour les groupes
router.get('/', groupController.getAllGroups);
router.post('/', groupController.createGroup);
router.get('/:id', groupController.getGroupById);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;
