"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../db");
const routes_1 = require("../routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
(0, db_1.connectDB)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('/src/public'));
app.use(express_1.default.json());
app.use('/api/auth', routes_1.authRouter);
app.use('/api/projects', routes_1.projectRouter);
app.use('/api/courses', routes_1.courseRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} 🚀`);
});
