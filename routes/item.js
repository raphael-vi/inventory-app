const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.post('/', itemController.createNewItem);
router.post('/:id/edit', itemController.updateItem);
router.post('/:id/delete', itemController.deleteItem);
router.get('/:id/edit', itemController.getItemById);
router.get('/:id', itemController.getItemById);

module.exports = router;

