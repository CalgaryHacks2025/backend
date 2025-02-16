import db from '../db/knex.js';
class UserModel {
    async createUser(userData) {
        // ... your code to create a user
        const [id] = await db('users').insert(userData).returning('id');
        return this.getUserById(id);
    }

    async getUserById(id) {
        return db('users').where({ id }).first();
    }

    async getUserByUsername(username) {
        return db('users').where({ username }).first();
    }

    async getUserByEmail(email) {
        return db('users').where({ email }).first();
    }

    async updateUserPassword(id, hashedPassword) {
        return db('users').where({ id }).update({ password: hashedPassword });
    }

    async deleteUser(id) {
        return db('users').where({ id }).del();
    }
}

export default UserModel; // Export the class itself