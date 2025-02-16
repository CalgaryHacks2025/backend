import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

const userModel = new UserModel();

const registerUser = async (userData) => {
    const { username, password } = userData;
    const existingUser = await userModel.getUserByUsername(username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = await userModel.createUser(userData);
    return newUser;
};

const loginUser = async (credentials) => {
    const { username, password } = credentials;
    const user = await userModel.getUserByUsername(username);
    if (!user || !(await userModel.verifyPassword(user, password))) {
        throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

const resetPassword = async (username, newPassword) => {
    const user = await userModel.getUserByUsername(username);
    if (!user) {
        throw new Error('User not found');
    }
    await userModel.updatePassword(user.id, newPassword);
    return { message: 'Password updated successfully' };
};

export { registerUser, loginUser, resetPassword };