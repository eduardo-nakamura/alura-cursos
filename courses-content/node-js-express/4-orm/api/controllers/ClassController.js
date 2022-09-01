const database = require('../models')

class ClassController {
    static async getAllClasses(req, res){
        try {
            const allPeople = await database.Classes.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).json(error.message)            
        }
    }

    static async filterClassById(req, res) {
        const { id } = req.params
        try {
            const selectedClass = await database.Classes.findOne({ where: { id: Number(id) } })
            if (selectedClass) {
                return res.status(200).json(selectedClass)
            } else {
                return res.status(204).json({ message: `Class with id not found.` })
            }

        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async postClass(req, res) {
        const newClass = req.body
        try {
            const newClassObj = await database.Classes.create(newClass)
            return res.status(200).json(newClassObj)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async updateClass(req, res) {
        const { id } = req.params
        const updateClass = req.body
        try {
            await database.Classes.update(updateClass, { where: { id: Number(id) } }) // new info, id from person
            const selectedClass = await database.Classes.findOne({ where: { id: Number(id) } })
            return res.status(200).json(selectedClass)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async removeClass(req, res) {
        const { id } = req.params
        try {
            await database.Classes.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `Class ${id} Removed.` })
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = ClassController