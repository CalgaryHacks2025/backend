import db from '../db/knex.js';

class UserModel {
    constructor() {
        this.tableName = 'users';
    }

    async getAllUsers() {
        return await db(this.tableName).select('*');
    }

    async getUserById(id) {
        return await db(this.tableName).where({ id }).first();
    }

    async createUser(userData) {
        const [id] = await db(this.tableName).insert(userData).returning('id');
        return this.getUserById(id);
    }

    async updateUser(id, userData) {
        await db(this.tableName).where({ id }).update(userData);
        return this.getUserById(id);
    }

    async deleteUser(id) {
        return await db(this.tableName).where({ id }).del();
    }
}

export default UserModel;