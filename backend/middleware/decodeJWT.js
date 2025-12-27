const jwt = require('jsonwebtoken');
const {prisma} = require('../db/connection');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch full user details to attach to request
        // We select only what we need for security
        const user = await prisma.users.findUnique({
            where: { email: decoded.email },
        });

        if (!user) {
            return res.status(401).json({ message: 'User belonging to this token no longer exists.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        res.status(403).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = verifyToken;