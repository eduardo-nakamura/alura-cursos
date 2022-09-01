const database = require('../models')

class PeopleController {
    static async getAllPeople(req, res){
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).json(error.message)            
        }
    }

    static async filterPeopleById(req, res){
        const { id } = req.params
        try {
            const selectedPeople = await database.People.findOne({ where: { id: Number(id) }})
            if (selectedPeople) {
                return res.status(200).json(selectedPeople)
            } else {
                return res.status(204).json({ message: `People with id not found.` })
            }
       
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async postPeople(req, res){
        const newPeople = req.body
        try {
            const newPeopleObj = await database.People.create(newPeople)
            return res.status(200).json(newPeopleObj)
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async updatePeople(req, res){
        const { id } = req.params
        const updatePeople = req.body
        try {
            await database.People.update(updatePeople, { where: { id: Number(id) }}) // new info, id from person
            const selectedPeople = await database.People.findOne({ where: { id: Number(id) }})
            return res.status(200).json(selectedPeople)
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async removePeople(req, res){
        const { id } = req.params
        try {
            await database.People.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ message: `User ${id} Removed.` })
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }
}

module.exports = PeopleController