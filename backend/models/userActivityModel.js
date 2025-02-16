import knex from '../db/knexfile.js';

class UserActivityModel {
    constructor() {
        this.tableName = 'UserActivity';
    }

    async logActivity(userId, activity) {
        return await knex(this.tableName).insert({
            user_id: userId,
            activity,
            timestamp: new Date()
        });
    }

    async getUserActivities(userId) {
        return await knex(this.tableName).where({ user_id: userId }).orderBy('timestamp', 'desc');
    }

    async deleteActivity(activityId) {
        return await knex(this.tableName).where({ id: activityId }).del();
    }
}

export default new UserActivityModel();