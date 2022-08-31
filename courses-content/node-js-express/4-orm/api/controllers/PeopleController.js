const database = require('../models')

class PeopleController {
    static async getAllPeople(req, res){
        try {
            const allPeople = await database.Person.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).json(error.message)            
        }
    }

    static async filterPersonById(req, res){
        const { id } = req.params
        try {
            const selectedPerson = await database.Person.findOne({ where: { id: Number(id) }})
            if (selectedPerson) {
                return res.status(200).json(selectedPerson)
            } else {
                return res.status(204).json({ message: `Person with id not found.` })
            }
       
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async postPerson(req, res){
        const newPerson = req.body
        try {
            const newPersonObj = await database.Person.create(newPerson)
            return res.status(200).json(newPersonObj)
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async updatePerson(req, res){
        const { id } = req.params
        const updatePerson = req.body
        try {
            await database.Person.update(updatePerson, { where: { id: Number(id) }}) // new info, id from person
            const selectedPerson = await database.Person.findOne({ where: { id: Number(id) }})
            return res.status(200).json(selectedPerson)
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }

    static async removePerson(req, res){
        const { id } = req.params
        try {
            await database.Person.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ message: `User ${id} Removed.` })
        } catch (error) {
            return res.status(400).json(error.message)  
        }
    }
}

module.exports = PeopleController