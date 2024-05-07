"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El correo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña debe tener al menos 6 caracteres').isLength({
        min: 6,
    }),
    middlewares_1.validateFields,
], controllers_1.createUser);
exports.authRouter.post('/login', [
    (0, express_validator_1.check)('email', 'El correo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña debe tener al menos 6 caracteres').isLength({
        min: 6,
    }),
    middlewares_1.validateFields,
], controllers_1.loginUser);
exports.authRouter.get('/renew', middlewares_1.validateJwt, controllers_1.renewToken);
