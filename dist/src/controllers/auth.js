"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewToken = exports.loginUser = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const schema_1 = require("../schema");
const utils_1 = require("../utils");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        let user = yield schema_1.User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado',
            });
        }
        user = new schema_1.User(req.body);
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(password, salt);
        yield user.save();
        const token = (yield (0, utils_1.generateJwt)(user.id, user.name));
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield schema_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario con ese correo',
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta',
            });
        }
        const token = (yield (0, utils_1.generateJwt)(user.id, user.name));
        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
});
exports.loginUser = loginUser;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, name } = req;
    const token = (yield (0, utils_1.generateJwt)(uid, name));
    res.json({
        ok: true,
        uid,
        name,
        token,
    });
});
exports.renewToken = renewToken;
