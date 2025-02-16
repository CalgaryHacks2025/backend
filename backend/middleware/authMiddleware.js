import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const verifyToken = promisify(jwt.verify);

export const authenticateJWT = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.sendStatus(403);
    }

    try {
        const decoded = await verifyToken(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.sendStatus(401);
    }
};

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};