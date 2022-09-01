const database = require('../models')

class LevelController {
    static async getAllLevel(req, res) {
        try {
            const allLevel = await database.Levels.findAll()
            return res.status(200).json(allLevel)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async filterLevelById(req, res) {
        const { id } = req.params
        try {
            const selectedLevel = await database.Levels.findOne({ where: { id: Number(id) } })
            if (selectedLevel) {
                return res.status(200).json(selectedLevel)
            } else {
                return res.status(204).json({ message: `Level with id not found.` })
            }

        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async postLevel(req, res) {
        const newLevel = req.body
        try {
            const newLevelObj = await database.Levels.create(newLevel)
            return res.status(200).json(newLevelObj)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async updateLevel(req, res) {
        const { id } = req.params
        const updateLevel = req.body
        try {
            await database.Levels.update(updateLevel, { where: { id: Number(id) } }) // new info, id from person
            const selectedLevel = await database.Levels.findOne({ where: { id: Number(id) } })
            return res.status(200).json(selectedLevel)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async removeLevel(req, res) {
        const { id } = req.params
        try {
            await database.Levels.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `Level ${id} Removed.` })
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = LevelController