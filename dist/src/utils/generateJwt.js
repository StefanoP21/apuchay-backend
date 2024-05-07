"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJwt = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        const secret = process.env.SECRET_JWT_SEED;
        if (!secret) {
            throw new Error('No se ha definido un secret para el JWT');
        }
        jsonwebtoken_1.default.sign(payload, secret, {
            expiresIn: '2h',
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });
    });
};
exports.generateJwt = generateJwt;
