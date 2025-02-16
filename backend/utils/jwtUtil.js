import jwt from 'jsonwebtoken';

export const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Export the key!
const EXPIRATION_TIME = '1h';

export const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRATION_TIME });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};