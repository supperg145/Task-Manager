const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

const isAdmin = (req, res, next) => {
    if (req.role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};

module.exports = { authMiddleware, isAdmin };