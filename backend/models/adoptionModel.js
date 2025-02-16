import knex from '../db/knex.js';

class AdoptionModel {
    constructor() {
        this.tableName = 'adoptions';
    }

    async createAdoption(adoptionData) {
        const [id] = await knex(this.tableName).insert(adoptionData).returning('id');
        return this.getAdoptionById(id);
    }

    async getAdoptionById(id) {
        return knex(this.tableName).where({ id }).first();
    }

    async getAllAdoptions() {
        return knex(this.tableName).select('*');
    }

    async updateAdoption(id, adoptionData) {
        await knex(this.tableName).where({ id }).update(adoptionData);
        return this.getAdoptionById(id);
    }

    async deleteAdoption(id) {
        return knex(this.tableName).where({ id }).del();
    }
}

export default AdoptionModel; // Export the class itself!