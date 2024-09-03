// 1. Importar elementos necesarios
const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')


// 2. Definición de las rutas
router.post('/', itemController.createItem)
router.get('/', itemController.getItems)
router.get('/:id', itemController.getItemByid)
router.put('/:id', itemController.updateItemById)
router.delete('/:id', itemController.deleteItemById)

module.exports = router