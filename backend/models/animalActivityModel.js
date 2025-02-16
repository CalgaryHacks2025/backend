import knex from '../db/knex.js';

class AnimalActivityModel {
    constructor() {
        this.tableName = 'animal_activity';
    }

    async logActivity(animalId, activity) {
        return await knex(this.tableName).insert({
            animal_id: animalId,
            activity,
            timestamp: new Date()
        });
    }

    async getUserActivities(animalId) {
        return await knex(this.tableName).where({ animal_id: animalId }).orderBy('timestamp', 'desc');
    }

}

export default AnimalActivityModel;