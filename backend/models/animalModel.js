import db from '../db/knex.js';

class AnimalModel {
    constructor() {
        this.tableName = 'animals';
    }

    async getAllAnimals() {
        return await db(this.tableName).select('*');
    }

    async getAnimalById(id) {
        return await db(this.tableName).where({ id }).first();
    }

    async createAnimal(animalData) {
        const [id] = await db(this.tableName).insert(animalData).returning('id');
        return this.getAnimalById(id);
    }

    async updateAnimal(id, animalData) {
        await db(this.tableName).where({ id }).update(animalData);
        return this.getAnimalById(id);
    }

    async deleteAnimal(id) {
        return await db(this.tableName).where({ id }).del();
    }
}

export default AnimalModel;