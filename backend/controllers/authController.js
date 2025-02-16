import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../utils/jwtUtil.js';

const userModel = new UserModel();

export const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser({ username, password: hashedPassword, email });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.getUserByUsername(username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await userModel.updateUserPassword(user.id, hashedPassword);
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password', error: error.message });
    }
};