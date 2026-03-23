const express=require('express');
const router=express.Router();
const itemController=require('../controllers/itemController');
//route to get all items
router.get('/item/',itemController.getAllItems);
//route to search an item by id
router.get('/item/:id',itemController.getItemById);
//route to create a new item
router.post('/item',itemController.createItem);
//route to edit an item
router.put('/item',itemController.updateItem);
//route to delete an item
router.delete('/item',itemController.deleteItem);
module.exports=router;
