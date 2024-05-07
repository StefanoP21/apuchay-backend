"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJwt = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición',
        });
    }
    try {
        const secretKey = process.env.SECRET_JWT_SEED;
        const { uid, name } = jsonwebtoken_1.default.verify(token, secretKey);
        req.uid = uid;
        req.name = name;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido',
        });
    }
    next();
};
exports.validateJwt = validateJwt;
