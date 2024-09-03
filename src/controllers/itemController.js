// 1. importar el modelo para crear la colección en la base de datos
let Item = require('../models/itemModel')

// 2. Crear un nuevo 
exports.createItem = async(request, response)=>{
    try{
        const newItem = new Item(request.body)
        await newItem.save()
        response.status(201).json(newItem)
    } catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 3. Obtener todos los Ítems
exports.getItems = async(request, response) => {
    try{
        const items = await Item.find()
        response.json(items)
    } catch (error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 3.1 Obtener un Ítem por Id
exports.getItemByid = async(request, response)=>{
    try{
        const item = await Item.findById(request.params.id)

        if(!item) return response.status(404).json({
            message:'Item no encontrado'
        })

        response.json(item)
    } catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 4. Actualizar un Ítems por Id
exports.updateItemById = async(request, response)=>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(request.params.id, request.body, {new:true})
        
        if(!updatedItem) return response.status(404).json({
            message:'Item no encontrado'
        })
        
        response.json(updatedItem)
    }catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 5. Eliminar un Ítem por Id
exports.deleteItemById = async(request, response)=>{
    try{
        const deletedItem = await Item.findByIdAndDelete(request.params.id)

        if(!deletedItem) return response.status(404).json({
            message:'Item no encontrado'
        })

        response.json({
            message:'Mensaje borrado con éxito'
        })
    } catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}
