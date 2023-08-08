import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // read the JWT from the cookie
    token = req.cookies.jwt;

    /* try authorizing without token */
    const authHeader = req.headers.authorization;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-passoword');
            next();
        } 
        catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    else if (authHeader && authHeader.startsWith('Basic')){
        const credentials = authHeader.split(' ')[1];
        const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8');
        const [username, password] = decodedCredentials.split(':');

        try {
            // Validate username and password here (e.g., using your User model)
            const user = await User.findOne({ email: username });
            
            if (user && await user.matchPassword(password)) {
                req.user = user;
                next();
            }
            else {
                console.log(error);
                res.status(401);
                throw new Error('Not authorized, credential error');
            }
        }
        catch(error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, credential error');
        }
    }
    else {
        res.status(401);
        throw new Error('Not authorized, no token or credentials provided');
    }
});

// Admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        res.status(401);
        throw new Error('Not authorized as admin');
    }
};

export {protect, admin};
